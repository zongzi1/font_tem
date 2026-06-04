import React from 'react';
import Provider from '@/provide/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider>
          <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage:"url('/assets/images/home.png')"}}>
          {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
