'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressCircle } from '@/components/ui/progress-circle';
import {
  FileText,
  Calendar,
  User,
  MoreHorizontal,
  Plus,
  TrendingUp,
  Target,
  CheckCircle2,
  Clock,
  AlertCircle,
  Users,
  BarChart3,
  Activity,
  Settings,
  ChevronRight
} from 'lucide-react';
import { TASK_STATUS_MAP, TASK_PRIORITY_MAP, GOAL_STATUS_MAP } from '@/types';

// Mock data for demonstration
const mockTasks = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create wireframes and mockups for the new product landing page',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    assigneeName: 'Alex Johnson',
    assigneeAvatar: '',
    dueDate: '2023-06-15',
    isOverdue: false,
  },
  {
    id: '2',
    title: 'API Integration',
    description: 'Integrate payment gateway API with the checkout flow',
    status: 'TODO',
    priority: 'CRITICAL',
    assigneeName: 'Sam Smith',
    assigneeAvatar: '',
    dueDate: '2023-06-10',
    isOverdue: true,
  },
  {
    id: '3',
    title: 'User Testing',
    description: 'Conduct usability testing with 10 participants',
    status: 'DONE',
    priority: 'MEDIUM',
    assigneeName: 'Jamie Wilson',
    assigneeAvatar: '',
    dueDate: '2023-06-05',
    isOverdue: false,
  },
];

const mockGoals = [
  {
    id: '1',
    title: 'Increase User Engagement',
    description: 'Improve daily active users by 25%',
    target: 100,
    current: 75,
    unit: '%',
    deadline: '2023-06-30',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    category: 'Product',
  },
  {
    id: '2',
    title: 'Reduce Load Time',
    description: 'Optimize application performance',
    target: 100,
    current: 40,
    unit: 'ms',
    deadline: '2023-07-15',
    status: 'IN_PROGRESS',
    priority: 'CRITICAL',
    category: 'Engineering',
  },
];

const mockSprints = [
  {
    id: '1',
    name: 'Sprint 12',
    goal: 'Complete user dashboard',
    startDate: '2023-06-01',
    endDate: '2023-06-15',
    status: 'ACTIVE',
    storyPoints: 45,
    completedPoints: 28,
    tasks: 18,
    completedTasks: 12,
    burndownData: [],
  },
  {
    id: '2',
    name: 'Sprint 13',
    goal: 'Implement notifications',
    startDate: '2023-06-16',
    endDate: '2023-06-30',
    status: 'PLANNED',
    storyPoints: 32,
    completedPoints: 0,
    tasks: 15,
    completedTasks: 0,
    burndownData: [],
  },
];

const mockActivity = [
  {
    id: '1',
    userId: '1',
    userName: 'Alex Johnson',
    userAvatar: '',
    action: 'completed task',
    targetType: 'task',
    targetName: 'Design new landing page',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    userId: '2',
    userName: 'Sam Smith',
    userAvatar: '',
    action: 'commented on',
    targetType: 'task',
    targetName: 'API Integration',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    userId: '3',
    userName: 'Jamie Wilson',
    userAvatar: '',
    action: 'created',
    targetType: 'goal',
    targetName: 'Reduce Load Time',
    timestamp: '1 day ago',
  },
];

export const OverviewCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-lg font-medium">Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Tasks Completed</p>
                <p className="text-2xl font-bold">76</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Goals Achieved</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Team Members</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const TasksCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Tasks</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {mockTasks.map((task) => (
            <div key={task.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium truncate">{task.title}</h4>
                    <Badge
                      className="ml-2 text-xs"
                      variant={
                        task.priority === 'CRITICAL' ? 'destructive' :
                        task.priority === 'HIGH' ? 'warning' :
                        task.priority === 'MEDIUM' ? 'secondary' : 'default'
                      }
                    >
                      {TASK_PRIORITY_MAP[task.priority].label}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">{task.description}</p>
                  <div className="flex items-center mt-2">
                    <Badge
                      className="text-xs"
                      variant={
                        task.status === 'DONE' ? 'success' :
                        task.status === 'IN_PROGRESS' ? 'warning' :
                        task.status === 'TODO' ? 'secondary' : 'default'
                      }
                    >
                      {TASK_STATUS_MAP[task.status].label}
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">
                      {task.assigneeName}
                    </span>
                    <span className={`text-xs ml-2 ${task.isOverdue ? 'text-red-500' : 'text-gray-500'}`}>
                      Due {task.dueDate}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const GoalsCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-medium">Goals</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {mockGoals.map((goal) => (
            <div key={goal.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium truncate">{goal.title}</h4>
                    <Badge
                      className="ml-2 text-xs"
                      variant={
                        goal.status === 'COMPLETED' ? 'success' :
                        goal.status === 'IN_PROGRESS' ? 'warning' :
                        'default'
                      }
                    >
                      {GOAL_STATUS_MAP[goal.status].label}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">{goal.description}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">{goal.current}/{goal.target} {goal.unit}</span>
                      <span className="text-gray-500">{goal.deadline}</span>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const SprintsCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 border-b flex items-center justify-between">
        <CardTitle className="text-lg font-medium">Active Sprints</CardTitle>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {mockSprints.map((sprint) => (
            <div key={sprint.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h4 className="text-sm font-medium truncate">{sprint.name}</h4>
                    <Badge
                      className="ml-2 text-xs"
                      variant={sprint.status === 'ACTIVE' ? 'success' : 'default'}
                    >
                      {sprint.status.toLowerCase()}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">{sprint.goal}</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="text-xs">
                      <span className="text-gray-500">Points:</span>
                      <span className="ml-1 font-medium">{sprint.completedPoints}/{sprint.storyPoints}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">Tasks:</span>
                      <span className="ml-1 font-medium">{sprint.completedTasks}/{sprint.tasks}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">Start:</span>
                      <span className="ml-1">{sprint.startDate}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-500">End:</span>
                      <span className="ml-1">{sprint.endDate}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const ActivityFeedCard = () => {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-lg font-medium">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {mockActivity.map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.userName}</span>{' '}
                    {activity.action}{' '}
                    <span className="font-medium">{activity.targetName}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};