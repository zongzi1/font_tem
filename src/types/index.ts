export interface User {
  id: string;
  email: string;
  username: string;
  fullName: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  department?: string;
  position?: string;
  lastLoginAt?: string;
  createdAt: string;
}

export type UserRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'PROJECT_MANAGER'
  | 'TEAM_LEAD'
  | 'MEMBER'
  | 'VIEWER';

export type UserStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED' | 'DELETED';

export interface Project {
  id: string;
  name: string;
  key: string;
  description?: string;
  status: ProjectStatus;
  ownerId: string;
  startDate?: string;
  dueDate?: string;
  progress: number;
  color?: string;
  icon?: string;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
  memberIds?: string[];
}

export type ProjectStatus =
  | 'PLANNING'
  | 'ACTIVE'
  | 'ON_HOLD'
  | 'COMPLETED'
  | 'CANCELLED';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId: string;
  projectName?: string;
  assigneeId?: string;
  assigneeName?: string;
  assigneeAvatar?: string;
  reporterId?: string;
  reporterName?: string;
  dueDate?: string;
  startDate?: string;
  estimatedTime?: number;
  actualTime?: number;
  storyPoints?: number;
  sprintId?: string;
  parentTaskId?: string;
  order: number;
  isOverdue?: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus =
  | 'BACKLOG'
  | 'TODO'
  | 'IN_PROGRESS'
  | 'IN_REVIEW'
  | 'TESTING'
  | 'DONE'
  | 'CANCELLED';

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Goal {
  id: string;
  title: string;
  description?: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: GoalStatus;
  priority: GoalPriority;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export type GoalStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD';
export type GoalPriority = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface Sprint {
  id: string;
  name: string;
  goal: string;
  startDate: string;
  endDate: string;
  status: SprintStatus;
  storyPoints: number;
  completedPoints: number;
  tasks: number;
  completedTasks: number;
  burndownData: { day: string; ideal: number; actual: number }[];
}

export type SprintStatus = 'PLANNED' | 'ACTIVE' | 'COMPLETED';

export interface Activity {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  action: string;
  targetType: string;
  targetName: string;
  timestamp: string;
}

export interface DashboardStats {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  overdueTasks: number;
  totalProjects: number;
  activeSprints: number;
  completionRate: number;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  user: User;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
  timestamp: string;
}

export interface PageResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const TASK_STATUS_MAP: Record<TaskStatus, { label: string; color: string }> = {
  BACKLOG: { label: 'Backlog', color: 'bg-gray-100 text-gray-700' },
  TODO: { label: 'To Do', color: 'bg-blue-100 text-blue-700' },
  IN_PROGRESS: { label: 'In Progress', color: 'bg-orange-100 text-orange-700' },
  IN_REVIEW: { label: 'In Review', color: 'bg-purple-100 text-purple-700' },
  TESTING: { label: 'Testing', color: 'bg-cyan-100 text-cyan-700' },
  DONE: { label: 'Done', color: 'bg-green-100 text-green-700' },
  CANCELLED: { label: 'Cancelled', color: 'bg-red-100 text-red-700' },
};

export const TASK_PRIORITY_MAP: Record<TaskPriority, { label: string; color: string }> = {
  LOW: { label: 'Low', color: 'text-gray-500' },
  MEDIUM: { label: 'Medium', color: 'text-blue-500' },
  HIGH: { label: 'High', color: 'text-orange-500' },
  CRITICAL: { label: 'Critical', color: 'text-red-500' },
};

export const GOAL_STATUS_MAP: Record<GoalStatus, { label: string; color: string }> = {
  NOT_STARTED: { label: 'Not Started', color: 'bg-gray-100 text-gray-700' },
  IN_PROGRESS: { label: 'In Progress', color: 'bg-blue-100 text-blue-700' },
  COMPLETED: { label: 'Completed', color: 'bg-green-100 text-green-700' },
  ON_HOLD: { label: 'On Hold', color: 'bg-orange-100 text-orange-700' },
};
