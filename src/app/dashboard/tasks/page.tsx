'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Plus, CheckCircle2 } from 'lucide-react';

const mockTasks = [
  { id: '1', title: 'AWS S3 集成学习', duration: '50 分钟', status: '进行中', completed: true },
  { id: '2', title: 'JWT 模块实现', duration: '120 分钟', status: '进行中', completed: false, active: true },
  { id: '3', title: '阅读技术书籍', duration: '30 分钟', status: '待开始', completed: false },
  { id: '4', title: '写作练习', duration: '60 分钟', status: '待开始', completed: false },
  { id: '5', title: '模拟考试', duration: '90 分钟', status: '待开始', completed: false },
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">任务管理</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          新增任务
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start h-12 bg-transparent border-b rounded-none px-6">
              <TabsTrigger value="all" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none px-6 font-bold">全部</TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none px-6 font-bold">进行中</TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none bg-transparent shadow-none px-6 font-bold">已完成</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="m-0">
              <div className="divide-y">
                {mockTasks.map((task) => (
                  <div key={task.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${task.completed ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 bg-white'}`}>
                        {task.completed && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <span className={`text-base font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <Badge variant="secondary" className={`px-3 py-1 rounded-full text-xs font-bold ${
                        task.completed ? 'bg-gray-100 text-gray-500' : 
                        task.active ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {task.status}
                      </Badge>
                      <span className="text-sm text-gray-400 w-20 text-right">{task.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="active" className="m-0 p-12 text-center text-gray-500">
              进行中的任务列表...
            </TabsContent>
            
            <TabsContent value="completed" className="m-0 p-12 text-center text-gray-500">
              已完成的任务列表...
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
