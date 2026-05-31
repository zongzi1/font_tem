'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Compass,
  CalendarDays,
  RefreshCcw,
  Target,
  CheckSquare,
  BarChart3,
  BookOpen,
  Settings,
  Menu,
  X,
  LogOut,
  User,
  Bell,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/auth-store';
import { useLogout } from '@/hooks/use-auth';
import { getInitials } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const menuItems = [
  { icon: LayoutDashboard, label: '首页', href: '/dashboard' },
  { icon: Compass, label: 'Compass', href: '/dashboard/compass' },
  { icon: CalendarDays, label: 'Today', href: '/dashboard/today' },
  { icon: RefreshCcw, label: 'Reflection', href: '/dashboard/reflection' },
  { icon: Target, label: '目标', href: '/dashboard/goals' },
  { icon: CheckSquare, label: '任务', href: '/dashboard/tasks' },
  { icon: BarChart3, label: '分析', href: '/dashboard/analytics' },
  { icon: Settings, label: '设置', href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed md:relative z-40 h-screen bg-white border-r transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "w-64"
        )}
      >
        <div className="p-4 border-b">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2"
            onClick={closeSidebar}
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-blue-600">Growth OS</span>
          </Link>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-500")} />
                <span className="font-medium text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t mt-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">Kou</p>
              <p className="text-xs text-gray-500 truncate">Free Plan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
