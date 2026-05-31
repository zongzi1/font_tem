import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import type { AuthResponse, ApiResponse } from '@/types';
import { useAuthStore } from '@/store/auth-store';

const authApi = {
  login: async (email: string, password: string) => {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/login', {
      email,
      password,
    });
    return data.data;
  },

  logout: async () => {
    await apiClient.post('/api/auth/logout');
  },

  getCurrentUser: async () => {
    const { data } = await apiClient.get<ApiResponse<{ user: AuthResponse['user'] }>>(
      '/api/auth/me'
    );
    return data.data.user;
  },
};

export function useLogin() {
  const { login: storeLogin } = useAuthStore();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authApi.login(email, password),
    onSuccess: (data) => {
      storeLogin(data.user, data.accessToken, data.refreshToken);
    },
  });
}

export function useLogout() {
  const { logout: storeLogout } = useAuthStore();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      storeLogout();
    },
  });
}
