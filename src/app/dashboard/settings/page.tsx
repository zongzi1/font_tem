'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Shield, Bell, Settings as SettingsIcon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">设置页面</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1 border-0 shadow-sm h-fit">
          <CardContent className="p-2">
            <div className="space-y-1">
              <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-bold text-sm">
                <span>推荐</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              </button>
              <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                账号安全
              </button>
              <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                通知设置
              </button>
              <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                偏好设置
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Settings */}
        <Card className="lg:col-span-3 border-0 shadow-sm">
          <CardHeader className="py-6 border-b">
            <CardTitle className="text-lg font-bold">个人信息</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="max-w-2xl space-y-8">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Kou</h4>
                  <button className="text-sm text-blue-600 font-medium hover:underline mt-1">
                    更换头像
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">姓名</label>
                  <Input 
                    defaultValue="Kou" 
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">邮箱</label>
                  <Input 
                    defaultValue="your.email@example.com" 
                    type="email"
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 bg-gray-50/50"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Button className="w-full md:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-base shadow-lg shadow-blue-200">
                  保存设置
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
