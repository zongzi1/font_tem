'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import toast from 'react-hot-toast';

interface ForgetForm {
  email: string;
}

export default function ForgetPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<ForgetForm>();

  const onSubmit = async (data: ForgetForm) => {
    try {
      // 模拟找回密码逻辑
      toast.success('验证码已发送至您的账号');
    } catch (error) {
      toast.error('操作失败，请稍后再试');
    }
  };

  return (
    // <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage:"url('/assets/images/home.png')"}}>
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
                <circle cx="12" cy="12" r="10" />
                <path d="M16.2 7.8l-2.2 2.2" />
                <path d="M12 12l-2.2 2.2" />
                <path d="M7.8 16.2l-2.2 2.2" />
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black text-center text-gray-900 tracking-tight">
              Growth OS
            </CardTitle>
            <CardDescription className="text-center font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px]">
              找回您的密码
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                绑定的账号
              </label>
              <Input
                id="email"
                type="email"
                placeholder="邮箱 / 手机号"
                className="h-12 bg-gray-50 border-gray-100 focus:border-blue-500 focus:ring-blue-500 rounded-xl font-medium px-4 transition-all"
                {...register('email', { required: '请输入绑定的账号' })}
              />
              {errors.email && (
                <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email.message}</p>
              )}
              <p className="text-[10px] text-gray-400 font-medium ml-1 mt-2 leading-relaxed">
                请输入您注册时绑定的邮箱或手机号，我们将向其发送验证信息以重置密码。
              </p>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-[0.98] text-base"
              >
                发送验证信息
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-2">
              <span className="text-[10px] font-bold text-gray-400">记起密码了?</span>
              <button 
                type="button" 
                onClick={() => router.push('/login/verifyEmail')}
                className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider"
              >
                返回登录
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    //</div>
  );
}
