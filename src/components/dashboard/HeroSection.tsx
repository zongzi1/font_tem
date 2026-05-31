'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  TrendingUp,
  Target,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  FileText
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  color?: string;
}

const StatCard = ({ title, value, change, icon, color = 'blue' }: StatCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
            {change !== undefined && (
              <div className="flex items-center mt-1">
                <TrendingUp className={`w-4 h-4 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-xs ml-1 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {change >= 0 ? '+' : ''}{change}%
                </span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickAction = ({ icon, title, description }: QuickActionProps) => {
  return (
    <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        {icon}
      </div>
      <div className="ml-3">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export const HeroBanner = () => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex!</h1>
          <p className="text-gray-500 mt-1">Here&apos;s what&apos;s happening with your projects today.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </div>
      </div>
    </div>
  );
};

export const StatsCards = () => {
  const stats = [
    { title: 'Total Tasks', value: '128', change: 12, icon: <FileText className="w-5 h-5" />, color: 'blue' },
    { title: 'Completed', value: '76', change: 8, icon: <CheckCircle2 className="w-5 h-5" />, color: 'green' },
    { title: 'In Progress', value: '32', change: -2, icon: <Clock className="w-5 h-5" />, color: 'yellow' },
    { title: 'Overdue', value: '5', change: -5, icon: <AlertCircle className="w-5 h-5" />, color: 'red' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export const QuickActions = () => {
  const actions = [
    { icon: <FileText className="w-5 h-5" />, title: 'Create Task', description: 'Add a new task to your project' },
    { icon: <Target className="w-5 h-5" />, title: 'Set Goal', description: 'Define a new objective' },
    { icon: <Users className="w-5 h-5" />, title: 'Invite Member', description: 'Add team members to your project' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Schedule Meeting', description: 'Plan a team sync' },
  ];

  return (
    <Card className="border-0 shadow-sm mb-6">
      <CardContent className="p-4">
        <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {actions.map((action, index) => (
            <QuickAction
              key={index}
              icon={action.icon}
              title={action.title}
              description={action.description}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Project Completion</p>
              <p className="text-lg font-bold mt-1">76%</p>
            </div>
            <ProgressCircle percentage={76} size="md" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sprint Progress</p>
              <p className="text-lg font-bold mt-1">64%</p>
            </div>
            <ProgressCircle percentage={64} size="md" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Goal Achievement</p>
              <p className="text-lg font-bold mt-1">82%</p>
            </div>
            <ProgressCircle percentage={82} size="md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};