'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Brain,
  Zap,
  Coffee,
  BookOpen,
  Layout
} from 'lucide-react';

export default function TodayPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Today 模块 - 今日执行</h1>
          <p className="text-gray-500 mt-1">每一小步都是向目标迈进的一大步</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Plan & Timer */}
          <Card className="border-0 shadow-sm text-center p-12 bg-white">
            <CardHeader className="pt-0">
              <CardTitle className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">今日计划</CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="space-y-3">
                <p className="text-sm font-black text-blue-600 uppercase tracking-wider">正在专注</p>
                <h2 className="text-4xl font-black text-gray-900 leading-tight">Complete JWT Authentication Module</h2>
              </div>
              
              <div className="text-8xl font-black text-gray-900 font-mono tracking-tighter py-8 drop-shadow-sm">
                {formatTime(timeLeft)}
              </div>

              <div className="flex items-center justify-center space-x-6">
                <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-2 hover:bg-gray-50 transition-all">
                  <RotateCcw className="w-6 h-6 text-gray-400" />
                </Button>
                <Button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`rounded-full w-20 h-20 shadow-xl transition-all active:scale-90 ${isPlaying ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-100' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-100'}`}
                >
                  {isPlaying ? <Pause className="w-10 h-10 fill-white" /> : <Play className="w-10 h-10 fill-white ml-1.5" />}
                </Button>
                <Button variant="destructive" className="rounded-full px-8 py-7 font-black text-base shadow-lg shadow-red-100 transition-all active:scale-95">
                  结束专注
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Today's Rhythm */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Layout className="w-5 h-5 mr-2 text-blue-600" />
                今日节奏
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: '专注工作', time: '25:00', icon: Zap, color: 'text-orange-500', bg: 'bg-orange-50' },
                  { label: '学习', time: '45:00', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
                  { label: '休息', time: '15:00', icon: Coffee, color: 'text-green-500', bg: 'bg-green-50' },
                  { label: '紧急', time: '20:00', icon: Clock, color: 'text-red-500', bg: 'bg-red-50' },
                ].map((item, idx) => (
                  <div key={idx} className={`${item.bg} p-4 rounded-xl text-center`}>
                    <item.icon className={`w-6 h-6 mx-auto ${item.color}`} />
                    <p className="text-xs text-gray-500 mt-2">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{item.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Task List */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">任务清单</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                  + 添加任务
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full justify-start h-10 bg-transparent border-b rounded-none px-4">
                  <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none">全部</TabsTrigger>
                  <TabsTrigger value="active" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none">进行中</TabsTrigger>
                  <TabsTrigger value="completed" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none">已完成</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="p-4 space-y-4 m-0">
                  {[
                    { title: 'AWS S3 集成学习', time: '50 分钟', completed: true },
                    { title: 'JWT 模块实现', time: '120 分钟', completed: false, active: true },
                    { title: '阅读技术书籍', time: '30 分钟', completed: false },
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer ${task.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                          {task.completed && <CheckCircle2 className="w-4 h-4" />}
                        </div>
                        <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700 font-medium'}`}>
                          {task.title}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        {task.active && <span className="mr-2 text-blue-600 font-medium">进行中</span>}
                        {task.time}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Today's Progress */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-lg font-semibold">今日进度</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">任务完成</p>
                  <p className="text-xl font-bold">2/3</p>
                </div>
                <div className="flex flex-col items-center">
                  <ProgressCircle percentage={72} size="md" />
                  <span className="text-xs font-bold mt-1 text-blue-600">72%</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">专注时长</span>
                  <span className="font-medium text-gray-900">2.1 / 2.5 小时</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">连续天数</span>
                  <span className="font-medium text-gray-900">7 天</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Reminder */}
          <Card className="border-0 shadow-sm bg-blue-50/50">
            <CardHeader className="py-3 border-b border-blue-100">
              <CardTitle className="text-sm font-semibold flex items-center text-blue-700">
                <Brain className="w-4 h-4 mr-2" />
                AI 提醒
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-blue-800 leading-relaxed">
                你今天的表现非常棒！距离目标尚有一点距离，建议在接下来的时间里集中精力完成 JWT 模块的最后一部分。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
