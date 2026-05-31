import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressCircleProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
  showPercentage?: boolean;
  className?: string;
  strokeColor?: string;
}

const sizeConfig = {
  sm: { dimension: 40, fontSize: 'text-[10px]' },
  md: { dimension: 64, fontSize: 'text-xs' },
  lg: { dimension: 100, fontSize: 'text-xl' },
};

export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (
    { percentage, size = 'md', strokeWidth = 4, showPercentage = true, className, strokeColor = 'stroke-blue-600' },
    ref
  ) => {
    const config = sizeConfig[size];
    const radius = (config.dimension - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{ width: config.dimension, height: config.dimension }}
      >
        <svg
          className="transform -rotate-90"
          width={config.dimension}
          height={config.dimension}
        >
          <circle
            cx={config.dimension / 2}
            cy={config.dimension / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-100"
          />
          <circle
            cx={config.dimension / 2}
            cy={config.dimension / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={strokeColor}
            style={{
              transition: 'stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </svg>
        {showPercentage && (
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              config.fontSize,
              'font-black text-gray-900'
            )}
          >
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }
);
ProgressCircle.displayName = 'ProgressCircle';