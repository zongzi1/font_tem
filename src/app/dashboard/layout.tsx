'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@/store/auth-store';
import { Sidebar } from '@/components/layout/Sidebar';
import {  Header } from '@/components/layout/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-white">
        <Sidebar />
        <div className="flex-1 relative flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
