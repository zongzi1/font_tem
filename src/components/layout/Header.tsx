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
    <header className="md:absolute md:top-0 md:right-0 z-30 p-4 md:p-6 w-full md:w-auto flex justify-end bg-white/80 backdrop-blur-sm md:bg-transparent">
      <div className="flex items-center space-x-1 md:space-x-2">
        <Button variant="ghost" size="icon" className="w-8 h-8 md:w-9 md:h-9 hover:bg-gray-100/50 rounded-xl">
          <Search className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
        </Button>
        
        <Button variant="ghost" size="icon" className="relative w-8 h-8 md:w-9 md:h-9 hover:bg-gray-100/50 rounded-xl">
          <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>

        <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-50 flex items-center justify-center ml-1 md:ml-3 border border-blue-100 shadow-sm cursor-pointer hover:bg-blue-100 transition-all active:scale-95 group">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.fullName} className="w-full h-full rounded-xl object-cover" />
          ) : (
            <User className="w-4 h-4 md:w-6 md:h-6 text-blue-600 group-hover:scale-110 transition-transform" />
          )}
        </div>
      </div>
    </header>
  );
}