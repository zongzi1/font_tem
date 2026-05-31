'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Brain, 
  ChevronRight,
  Target
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const dailyProgressData = [
  { name: '周一', value: 40 },
  { name: '周二', value: 30 },
  { name: '周三', value: 60 },
  { name: '周四', value: 45 },
  { name: '周五', value: 80 },
];

const growthTrendData = [
  { name: '周一', value: 10 },
  { name: '周二', value: 12.5 },
  { name: '周三', value: 11 },
  { name: '周四', value: 13 },
  { name: '周五', value: 15 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">早上好，Kou 👋</h1>
          <p className="text-gray-500 mt-1">今天是你成长的第 180 天</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 今日重点 */}
        <Card className="border-0 shadow-sm overflow-hidden flex flex-col bg-white">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-base font-bold">今日重点</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">Complete JWT Authentication Module</h3>
              <p className="text-sm text-gray-400 mt-2">Backend Development</p>
            </div>
            <div className="relative flex items-center justify-center">
              <ProgressCircle percentage={56} size="lg" strokeWidth={8} showPercentage={false} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-blue-600">56%</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-7 text-lg font-bold shadow-lg shadow-blue-100 transition-all active:scale-95">
                开始专注
              </Button>
              <p className="text-center text-xs text-gray-400 font-medium tracking-wide">
                今日专注时长：<span className="text-gray-900">2.1 小时</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 今日任务 */}
        <Card className="border-0 shadow-sm flex flex-col bg-white">
          <CardHeader className="py-4 border-b flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base font-bold">今日任务</CardTitle>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50 font-bold p-0 h-auto px-2 py-1">
              查看全部 >
            </Button>
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <div className="space-y-4">
              {[
                { title: 'AWS S3 集成学习', time: '50 分钟', completed: true },
                { title: 'JWT 模块实现', time: '120 分钟', completed: false, active: true },
                { title: '阅读技术书籍', time: '30 分钟', completed: false },
              ].map((task, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${task.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-200 bg-white group-hover:border-blue-400'}`}>
                    {task.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${task.completed ? 'text-gray-300 line-through' : 'text-gray-900'}`}>
                      {task.title}
                    </p>
                  </div>
                  <span className={`text-xs font-bold w-20 text-right ${task.active ? 'text-blue-600' : 'text-gray-400'}`}>
                    {task.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 今日进度 */}
        <Card className="border-0 shadow-sm flex flex-col bg-white">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-base font-bold">今日进度</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">完成比例</p>
                <p className="text-4xl font-black text-gray-900">72%</p>
              </div>
              <div className="text-right space-y-2">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400">任务完成</span>
                  <span className="text-sm font-bold text-gray-900">2 / 3</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400">专注时长</span>
                  <span className="text-sm font-bold text-gray-900">2.1 / 2.5 小时</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400">连续天数</span>
                  <span className="text-sm font-bold text-gray-900">7 天</span>
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[120px] w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyProgressData}>
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={24} />
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}} 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 shadow-lg rounded-lg border border-gray-100 text-xs font-bold">
                            {`${payload[0].value}%`}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI 今日建议 */}
        <Card className="border-0 shadow-sm bg-blue-50/50 lg:col-span-1 flex flex-col">
          <CardHeader className="py-4 border-b border-blue-100">
            <CardTitle className="text-base font-bold flex items-center text-blue-700">
              <Brain className="w-5 h-5 mr-2" />
              AI 今日建议
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex-1 flex items-center">
            <p className="text-sm text-blue-800 leading-relaxed font-medium">
              你今天在阅读方面进展缓慢，建议在接下来的专注时间里，先攻克难度最高的部分。系统检测到你下午 3 点后专注力较高，建议将 JWT 模块的核心逻辑放在该时段。
            </p>
          </CardContent>
        </Card>

        {/* 成长趋势 */}
        <Card className="border-0 shadow-sm lg:col-span-2 bg-white">
          <CardHeader className="py-4 border-b">
            <CardTitle className="text-base font-bold flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              成长趋势
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-end space-x-6 mb-8">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">本周累计专注</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black text-gray-900">12.5</span>
                  <span className="text-lg font-bold text-gray-500">小时</span>
                </div>
              </div>
              <div className="bg-green-100 text-green-700 text-xs font-black px-2 py-1 rounded-md flex items-center mb-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15%
              </div>
            </div>
            <div className="h-[180px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}} 
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 800, color: '#2563eb' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb" 
                    strokeWidth={4} 
                    dot={{r: 6, fill: '#2563eb', strokeWidth: 3, stroke: '#fff'}} 
                    activeDot={{r: 8, strokeWidth: 0}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
