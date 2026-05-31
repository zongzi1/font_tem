'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const router = useRouter();

  const startLogin = () => {
    router.push('/dashboard');
  };

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/assets/images/home.png')" }}>
      {/* 顶部Logo和标题 */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Growth OS</h1>
          <p className="text-xl md:text-2xl text-white">成长，从今天开始</p>
        </div>
      </div>

      {/* 底部功能卡片 */}
      <div className="pb-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">目标规划</h3>
            <p className="text-sm opacity-80">长期目标拆解</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">每日执行</h3>
            <p className="text-sm opacity-80">专注当下，高效行动</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">复盘成长</h3>
            <p className="text-sm opacity-80">回顾反思，扎根前进</p>
          </div>
        </div>
      </div>

      {/* 登录按钮 */}
      <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          type="button"
          onClick={startLogin}
        >
          开始使用
        </Button>
      </div>
    </div>
  );
}
