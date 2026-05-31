'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Bell, Search, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/auth-store';
import { useLogout } from '@/hooks/use-auth';
import { getInitials } from '@/lib/utils';

export function Header() {
  const router = useRouter();
  const { user } = useAuthStore();
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    router.push('/login');
  };

  return (
    <header className="bg-white border-b px-4 py-2 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* Module title is handled by page content */}
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5 text-gray-500" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-500" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </Button>

          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center ml-2 border border-blue-200">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.fullName} className="w-full h-full rounded-full" />
            ) : (
              <User className="w-5 h-5 text-blue-600" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}