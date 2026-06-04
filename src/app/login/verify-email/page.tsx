'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import toast from 'react-hot-toast';

interface VerifyEmailForm {
  code: string;
}

export default function VerifyEmailPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(60);
  const { register, handleSubmit, formState: { errors } } = useForm<VerifyEmailForm>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const onSubmit = async (data: VerifyEmailForm) => {
    try {
      // 模拟校验逻辑
      toast.success('校验成功');
      router.push('/login/reset-password');
    } catch (error) {
      toast.error('验证码错误');
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black text-center text-gray-900 tracking-tight">
              邮箱校验
            </CardTitle>
            <CardDescription className="text-center font-bold text-gray-400 uppercase tracking-[0.2em] text-[10px]">
              请输入发送至您邮箱的 6 位验证码
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-8 pb-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="code" className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                验证码
              </label>
              <div className="relative">
                <Input
                  id="code"
                  type="text"
                  placeholder="000000"
                  maxLength={6}
                  className="h-12 bg-gray-50 border-gray-100 focus:border-blue-500 focus:ring-blue-500 rounded-xl font-black text-center text-xl tracking-[0.5em] transition-all"
                  {...register('code', { 
                    required: '请输入验证码',
                    pattern: {
                      value: /^\d{6}$/,
                      message: '请输入 6 位数字验证码'
                    }
                  })}
                />
              </div>
              {errors.code && (
                <p className="text-[10px] text-red-500 font-bold ml-1">{errors.code.message}</p>
              )}
            </div>

            <div className="flex items-center justify-center">
              {countdown > 0 ? (
                <p className="text-[10px] font-bold text-gray-400">
                  重新发送 (<span className="text-blue-600">{countdown}s</span>)
                </p>
              ) : (
                <button 
                  type="button" 
                  onClick={() => setCountdown(60)}
                  className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider"
                >
                  重新获取验证码
                </button>
              )}
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-[0.98] text-base"
              >
                立即校验
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-2">
              <button 
                type="button" 
                onClick={() => router.back()}
                className="text-[10px] font-black text-gray-400 hover:text-gray-600 uppercase tracking-wider"
              >
                返回上一步
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
