'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { 
  Target, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Brain, 
  Milestone,
  ChevronRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { name: '第一周', value: 30 },
  { name: '第二周', value: 45 },
  { name: '第三周', value: 55 },
  { name: '第四周', value: 63 },
  { name: '第五周', value: 70 },
  { name: '第六周', value: 80 },
];

export default function CompassPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compass 模块 - 目标规划</h1>
          <p className="text-gray-500 mt-1">今天是你成长的第 180 天</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* My Goal Card */}
          <Card className="border-0 shadow-sm overflow-hidden bg-white">
            <CardHeader className="bg-white border-b py-4">
              <CardTitle className="text-lg font-bold flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                我的目标
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">IELTS 7.0 Overall</h2>
                    <div className="flex items-center mt-3 space-x-4">
                      <span className="bg-blue-100 text-blue-700 text-xs font-black px-2 py-1 rounded-md">进行中</span>
                      <span className="text-sm text-gray-400 font-bold flex items-center">
                        <Clock className="w-4 h-4 mr-1.5" />
                        目标日期：2025年6月30日
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    当前进度：<span className="text-blue-600 font-black">63%</span>。距离目标日期还有 <span className="text-gray-900 font-black">180</span> 天。目前的平均分数为 5.5，听力和阅读表现较好，口语和写作仍有提升空间。
                  </p>
                </div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative flex items-center justify-center">
                    <ProgressCircle percentage={63} size="lg" strokeWidth={10} showPercentage={true} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 mt-4 tracking-widest uppercase">总体进度</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Goal Overview */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="py-4 border-b">
                <CardTitle className="text-base font-semibold">目标概览</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-gray-500">当前水平</div>
                    <div className="text-right font-medium">5.5</div>
                    <div className="text-right text-blue-600 font-medium">目标 7.0</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-gray-500">基础水平</div>
                    <div className="text-right font-medium">5.5</div>
                    <div className="text-right text-blue-600 font-medium">目标 7.0</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-gray-500">每日投入时间</div>
                    <div className="text-right font-medium">2 小时</div>
                    <div className="text-right text-blue-600 font-medium">目标 4 小时</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis */}
            <Card className="border-0 shadow-sm bg-blue-50/50">
              <CardHeader className="py-4 border-b">
                <CardTitle className="text-base font-semibold flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-blue-600" />
                  AI 分析
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 mr-2 shrink-0" />
                    <span className="text-gray-700">阅读进度需要加快，词汇量仍需增加。</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 mr-2 shrink-0" />
                    <span className="text-gray-700">口语练习时间不满足，建议增加模拟对练。</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 mr-2 shrink-0" />
                    <span className="text-gray-700">听力进度稳定，继续保持当前节奏。</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Column - Milestones */}
        <Card className="border-0 shadow-sm h-full">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-lg font-semibold flex items-center">
              <Milestone className="w-5 h-5 mr-2 text-blue-600" />
              里程碑
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-6">
              {[
                { title: '词汇量达到 3000+', status: 'completed' },
                { title: '语法基础掌握', status: 'completed' },
                { title: '听力基础训练', status: 'completed' },
                { title: '口语流利度提升', status: 'in-progress' },
                { title: '写作技巧掌握', status: 'pending' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-green-100 text-green-600' : 
                      item.status === 'in-progress' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {item.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                    </div>
                    <span className={`text-sm ${item.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900 font-medium'}`}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors" />
                </div>
              ))}
              <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium text-center">
                查看详细计划 >
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Growth Chart */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="py-4 border-b">
          <CardTitle className="text-lg font-semibold flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
            成长曲线图
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }} 
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <p className="text-xs text-gray-500">基础阶段</p>
              <p className="text-sm font-bold text-gray-900 mt-1">1-4 周</p>
            </div>
            <div className="text-center border-l">
              <p className="text-xs text-gray-500">能力提升期</p>
              <p className="text-sm font-bold text-gray-900 mt-1">5-12 周</p>
            </div>
            <div className="text-center border-l">
              <p className="text-xs text-gray-500">冲刺突破期</p>
              <p className="text-sm font-bold text-gray-900 mt-1">13-20 周</p>
            </div>
            <div className="text-center border-l">
              <p className="text-xs text-gray-500">模拟实战期</p>
              <p className="text-sm font-bold text-gray-900 mt-1">21-24 周</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
