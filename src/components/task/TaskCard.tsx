import React from 'react';
import { Task } from '@/types';
import { Badge } from '@/components/ui/badge';
import { formatRelativeTime, getInitials } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

const statusColors: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  BACKLOG: 'secondary',
  TODO: 'default',
  IN_PROGRESS: 'default',
  IN_REVIEW: 'default',
  TESTING: 'secondary',
  DONE: 'outline',
  CANCELLED: 'outline',
};

const priorityColors: Record<string, string> = {
  LOW: 'text-gray-500',
  MEDIUM: 'text-yellow-500',
  HIGH: 'text-orange-500',
  CRITICAL: 'text-red-500',
};

export function TaskCard({ task, onClick }: TaskCardProps) {
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'DONE';

  return (
    <div
      onClick={onClick}
      className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer bg-white"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{task.description}</p>
          )}
        </div>
        <Badge variant={statusColors[task.status] || 'default'}>
          {task.status.replace('_', ' ')}
        </Badge>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          {task.assigneeName && (
            <div className="flex items-center space-x-1" title={task.assigneeName}>
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium">
                {getInitials(task.assigneeName)}
              </div>
            </div>
          )}

          {task.dueDate && (
            <div className={`flex items-center space-x-1 text-xs ${isOverdue ? 'text-red-500' : 'text-gray-500'}`}>
              <Calendar className="w-3 h-3" />
              <span>{formatRelativeTime(task.dueDate)}</span>
            </div>
          )}

          {task.storyPoints && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{task.storyPoints} SP</span>
            </div>
          )}
        </div>

        <div className={priorityColors[task.priority] || ''}>
          <span className="text-xs font-medium">{task.priority}</span>
        </div>
      </div>
    </div>
  );
}
