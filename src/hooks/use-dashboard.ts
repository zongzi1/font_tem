import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import type { AuthResponse, ApiResponse } from '@/types';
import { useAuthStore } from '@/store/auth-store';
import { register } from 'module';

const settingsApi = {
  updateProfile: async (username: string, email: string) => {//更新个人信息
    const { data } = await apiClient.put<ApiResponse<AuthResponse>>('/api/settings/profile', {
      username,
      email,
    });
    return data.data;
  }
};

export function updateProfile() {

  return useMutation({
    mutationFn: ({ username, email }: { username: string; email: string }) =>
      settingsApi.updateProfile(username, email),
    onSuccess: (data) => {
    },
  });
}
