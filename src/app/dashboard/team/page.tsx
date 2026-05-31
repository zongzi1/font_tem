'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-500 mt-1">Manage your team members</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="p-4 border-b">
          <CardTitle>Team Overview</CardTitle>
        </CardHeader>
        <CardContent className="p-8 text-center">
          <p className="text-gray-500">Team management features coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}