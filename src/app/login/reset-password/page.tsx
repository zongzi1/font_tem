'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import toast from 'react-hot-toast';

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordPage() {
  const router = useRouter();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ResetPasswordForm>();

  const password = watch('password');

  const onSubmit = async (data: ResetPasswordForm) => {
    try {
      // 模拟重置逻辑
      toast.success('密码重置成功');
      router.push('/login');
    } catch (error) {
      toast.error('重置失败，请稍后再试');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage:"url('/assets/images/home.png')"}}>
      <Card className="w-full max-w-[400px] border-0 shadow-2xl bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
        <CardHeader className="space-y-4 pt-10 pb-6">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-7 h-7 text-white"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black text-center text-gray-900 tracking-tight">
              设置新密码
            </CardTitle>
            <CardDescription className="text-center font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px]">
              请为您的账号设置一个新的安全密码
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                新密码
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 bg-gray-50 border-gray-100 focus:border-blue-500 focus:ring-blue-500 rounded-xl font-medium px-4 transition-all"
                {...register('password', { 
                  required: '请输入新密码',
                  minLength: { value: 8, message: '密码长度至少 8 位' }
                })}
              />
              {errors.password && (
                <p className="text-[10px] text-red-500 font-bold ml-1">{errors.password.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                确认新密码
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="h-12 bg-gray-50 border-gray-100 focus:border-blue-500 focus:ring-blue-500 rounded-xl font-medium px-4 transition-all"
                {...register('confirmPassword', { 
                  required: '请再次输入密码',
                  validate: value => value === password || '两次输入的密码不一致'
                })}
              />
              {errors.confirmPassword && (
                <p className="text-[10px] text-red-500 font-bold ml-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-[0.98] text-base"
              >
                重置密码
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-2">
              <button 
                type="button" 
                onClick={() => router.push('/login')}
                className="text-[10px] font-black text-gray-400 hover:text-gray-600 uppercase tracking-wider"
              >
                取消重置
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
