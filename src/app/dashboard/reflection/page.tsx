'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { 
  Smile, 
  Meh, 
  Frown, 
  Brain, 
  Calendar, 
  CheckCircle2, 
  Save,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function ReflectionPage() {
  const [mood, setMood] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reflection 模块 - 晚间复盘</h1>
          <p className="text-gray-500 mt-1">复盘是成长的催化剂</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          保存今日复盘
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Review Header */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-lg font-semibold">今日复盘</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center space-x-6">
                  <div className="flex flex-col items-center">
                    <ProgressCircle percentage={72} size="lg" />
                    <span className="text-sm font-bold mt-2 text-blue-600">72%</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">今日完成度</p>
                    <p className="text-xl font-bold text-gray-900">表现出色</p>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-3">
                  <p className="text-sm text-gray-500">心情记录</p>
                  <div className="flex space-x-4">
                    {[
                      { icon: Frown, label: '沮丧', value: 'bad' },
                      { icon: Meh, label: '平淡', value: 'normal' },
                      { icon: Smile, label: '开心', value: 'good' },
                    ].map((item) => (
                      <button
                        key={item.value}
                        onClick={() => setMood(item.value)}
                        className={`p-3 rounded-full transition-all ${
                          mood === item.value 
                            ? 'bg-blue-100 text-blue-600 scale-110' 
                            : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Questions */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-lg font-semibold flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
                复盘问题
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900">1. 今天最重要的成果是什么？</label>
                <Textarea 
                  placeholder="请输入你的回答..." 
                  className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900">2. 为什么会有这些表现？</label>
                <Textarea 
                  placeholder="请输入你的回答..." 
                  className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-900">3. 明天最重要的三件事是什么？</label>
                <Textarea 
                  placeholder="请输入你的回答..." 
                  className="min-h-[100px] border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* AI Summary */}
          <Card className="border-0 shadow-sm bg-indigo-50/50">
            <CardHeader className="py-4 border-b border-indigo-100">
              <CardTitle className="text-lg font-semibold flex items-center text-indigo-700">
                <Sparkles className="w-5 h-5 mr-2" />
                AI 总结
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-sm text-indigo-900 leading-relaxed font-medium">
                  你今天在 JWT 模块上取得了重大进展。通过你的记录，我发现：
                </p>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0" />
                    <span>你的专注时长高于平均水平 20%。</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0" />
                    <span>你在困难环节没有退缩，展现了良好的耐心。</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0" />
                    <span>明天可以考虑增加休息频率，保持高效。</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tomorrow's Plan */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-lg font-semibold flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                明日预案
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {[
                { title: 'Deep Work on AWS S3', completed: false },
                { title: 'Review JWT Code', completed: false },
                { title: 'English Listening Practice', completed: false },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center cursor-pointer group-hover:border-blue-500 transition-colors">
                    <div className="w-2.5 h-2.5 rounded-full bg-transparent group-hover:bg-blue-100" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item.title}</span>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 mt-2">
                + 修改预案
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
