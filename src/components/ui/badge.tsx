import * as React from 'react';
import { cn } from '@/lib/utils';

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning' | 'info' }
>(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'border-transparent bg-blue-100 text-blue-800',
    secondary: 'border-transparent bg-gray-100 text-gray-800',
    destructive: 'border-transparent bg-red-100 text-red-800',
    outline: 'text-foreground border border-gray-300',
    success: 'border-transparent bg-green-100 text-green-800',
    warning: 'border-transparent bg-yellow-100 text-yellow-800',
    info: 'border-transparent bg-blue-100 text-blue-800',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };