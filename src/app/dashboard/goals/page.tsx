'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Target, Calendar, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const mockGoals = [
  {
    id: '1',
    title: 'IELTS 7.0 Overall',
    deadline: '2025年6月30日',
    progress: 63,
    status: '进行中',
    color: 'bg-blue-600',
  },
  {
    id: '2',
    title: 'AWS Solutions Architect',
    deadline: '2025年12月31日',
    progress: 45,
    status: '进行中',
    color: 'bg-orange-500',
  },
  {
    id: '3',
    title: 'Spring Boot Expert',
    deadline: '2025年8月30日',
    progress: 28,
    status: '进行中',
    color: 'bg-green-500',
  },
  {
    id: '4',
    title: 'Financial Freedom',
    deadline: '2026年12月31日',
    progress: 15,
    status: '进行中',
    color: 'bg-red-500',
  },
];

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">我的目标</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          创建目标
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="divide-y">
            {mockGoals.map((goal) => (
              <div key={goal.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
                <div className="flex items-center space-x-4 flex-1">
                  <div className={`w-3 h-3 rounded-full ${goal.color}`} />
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-gray-900 truncate">{goal.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      目标日期：{goal.deadline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-8 w-1/2">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-gray-900">{goal.progress}%</span>
                      <span className="text-blue-600 font-medium">{goal.status}</span>
                    </div>
                    <Progress value={goal.progress} className="h-2 bg-gray-100">
                      <div 
                        className={`h-full transition-all ${goal.color}`} 
                        style={{ width: `${goal.progress}%` }} 
                      />
                    </Progress>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
