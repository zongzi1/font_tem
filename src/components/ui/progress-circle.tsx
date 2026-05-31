import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressCircleProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
  showPercentage?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { dimension: 40, fontSize: 'text-xs' },
  md: { dimension: 60, fontSize: 'text-sm' },
  lg: { dimension: 80, fontSize: 'text-base' },
};

export const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  (
    { percentage, size = 'md', strokeWidth = 4, showPercentage = true, className },
    ref
  ) => {
    const config = sizeConfig[size];
    const radius = (config.dimension - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Determine color based on percentage
    let strokeColor = 'stroke-blue-600';
    if (percentage >= 90) {
      strokeColor = 'stroke-green-500';
    } else if (percentage >= 70) {
      strokeColor = 'stroke-blue-500';
    } else if (percentage >= 50) {
      strokeColor = 'stroke-yellow-500';
    } else if (percentage >= 30) {
      strokeColor = 'stroke-orange-500';
    } else {
      strokeColor = 'stroke-red-500';
    }

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
            className="text-gray-200"
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
              transition: 'stroke-dashoffset 0.5s ease-in-out',
            }}
          />
        </svg>
        {showPercentage && (
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              config.fontSize,
              'font-medium'
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