import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import type { Task, TaskStatus, TaskPriority, ApiResponse, PageResponse } from '@/types';

// Query keys
export const taskKeys = {
  all: ['tasks'] as const,
  lists: () => [...taskKeys.all, 'list'] as const,
  list: (filters: Record<string, string | number | boolean>) =>
    [...taskKeys.lists(), filters] as const,
  details: () => [...taskKeys.all, 'detail'] as const,
  detail: (id: string) => [...taskKeys.details(), id] as const,
};

// API functions
const taskApi = {
  getTasks: async (params?: Record<string, string>) => {
    const { data } = await apiClient.get<ApiResponse<Task[]>>('/api/tasks', { params });
    return data.data;
  },

  getTask: async (id: string) => {
    const { data } = await apiClient.get<ApiResponse<Task>>(`/api/tasks/${id}`);
    return data.data;
  },

  createTask: async (task: {
    title: string;
    description?: string;
    projectId: string;
    priority?: TaskPriority;
    assigneeId?: string;
    dueDate?: string;
  }) => {
    const { data } = await apiClient.post<ApiResponse<Task>>('/api/tasks', task);
    return data.data;
  },

  updateTaskStatus: async (id: string, status: TaskStatus) => {
    const { data } = await apiClient.patch<ApiResponse<void>>(`/api/tasks/${id}/status`, {
      status,
    });
    return data.data;
  },

  updateTaskPriority: async (id: string, priority: TaskPriority) => {
    const { data } = await apiClient.patch<ApiResponse<void>>(`/api/tasks/${id}/priority`, {
      priority,
    });
    return data.data;
  },

  assignTask: async (id: string, assigneeId: string) => {
    const { data } = await apiClient.patch<ApiResponse<void>>(`/api/tasks/${id}/assign`, {
      assigneeId,
    });
    return data.data;
  },

  deleteTask: async (id: string) => {
    const { data } = await apiClient.delete<ApiResponse<void>>(`/api/tasks/${id}`);
    return data.data;
  },
};

// Hooks
export function useTasks(filters?: Record<string, string>) {
  return useQuery({
    queryKey: taskKeys.list(filters || {}),
    queryFn: () => taskApi.getTasks(filters),
  });
}

export function useTask(id: string) {
  return useQuery({
    queryKey: taskKeys.detail(id),
    queryFn: () => taskApi.getTask(id),
    enabled: !!id,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskApi.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}

export function useUpdateTaskStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: TaskStatus }) =>
      taskApi.updateTaskStatus(id, status),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: taskKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}

export function useUpdateTaskPriority() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, priority }: { id: string; priority: TaskPriority }) =>
      taskApi.updateTaskPriority(id, priority),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: taskKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}

export function useAssignTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, assigneeId }: { id: string; assigneeId: string }) =>
      taskApi.assignTask(id, assigneeId),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: taskKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => taskApi.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: taskKeys.lists() });
    },
  });
}
