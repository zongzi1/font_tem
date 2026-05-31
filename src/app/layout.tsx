import React from 'react';
import Provider from '@/provide/provider';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
