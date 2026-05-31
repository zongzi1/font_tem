'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrendingUp, Clock, Target, Calendar } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const analyticsData = [
  { name: '周一', value: 4 },
  { name: '周二', value: 6 },
  { name: '周三', value: 5 },
  { name: '周四', value: 8 },
  { name: '周五', value: 7 },
  { name: '周六', value: 10 },
  { name: '周日', value: 12 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">数据分析</h1>
        <Tabs defaultValue="week" className="w-auto">
          <TabsList className="bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="week" className="px-4 py-1.5 text-sm font-medium">本周</TabsTrigger>
            <TabsTrigger value="month" className="px-4 py-1.5 text-sm font-medium">本月</TabsTrigger>
            <TabsTrigger value="year" className="px-4 py-1.5 text-sm font-medium">本年</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-medium">专注时长</span>
              <div className="p-2 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">12.5 小时</span>
              <span className="text-xs text-green-600 font-bold">+15%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-medium">目标完成率</span>
              <div className="p-2 bg-green-50 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">72%</span>
              <span className="text-xs text-green-600 font-bold">+5%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 font-medium">连续天数</span>
              <div className="p-2 bg-orange-50 rounded-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">7 天</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="py-6 border-b">
          <CardTitle className="text-lg font-bold">专注时长趋势</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={analyticsData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 text-center">
            <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
              查看详细数据 &gt;
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
