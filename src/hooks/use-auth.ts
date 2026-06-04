import { useMutation } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import type { AuthResponse, ApiResponse } from '@/types';
import { useAuthStore } from '@/store/auth-store';
import { register } from 'module';

const authApi = {
  login: async (account: string, password: string) => {//登录
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/login', {
      account,
      password,
    });
    return data.data;
  },

  logout: async () => {//登出
    await apiClient.post('/api/auth/logout');
  },

  getCurrentUser: async () => {
    const { data } = await apiClient.get<ApiResponse<{ user: AuthResponse['user'] }>>(
      '/api/auth/me'
    );
    return data.data.user;
  },
    register: async (email: string, password: string) => {//注册
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/register', {
      email,
      password,
    });
    return data.data;
  },
    sendVerifyEmail: async (email: string, password: string) => {//发送验证邮件
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/email-verification/send', {
      email,
      password,
    });
    return data.data;
  },
  verifyEmail: async (email: string, code: string) => {//验证邮箱
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/email-verification/verify', {
      email,
      code,
    });
    return data.data;
  },
  forgotPassword: async (email: string) => {//忘记密码
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/forgot-password', {
      email,
    });
    return data.data;
  },
  resetPassword: async (email: string, code: string, password: string) => {//重置密码
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>('/api/auth/reset-password', {
      email,
      code,
      password,
    });
    return data.data;
  },
};

export function useLogin() {
  const { login: storeLogin } = useAuthStore();

  return useMutation({
    mutationFn: ({ account, password }: { account: string; password: string }) =>
      authApi.login(account, password),
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
