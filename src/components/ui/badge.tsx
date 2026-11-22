import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'lime' | 'outline' | 'dark' | 'electric' | 'purple' | 'success';
}

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      'bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-800',
    lime:
      'bg-[#A3F527]/10 text-[#A3F527] border-[#A3F527]/40 font-mono font-bold',
    electric:
      'bg-[#A3F527]/10 text-[#A3F527] border-[#A3F527]/40 font-mono font-bold',
    purple:
      'bg-[#A3F527]/15 text-[#A3F527] border-[#A3F527]/50 font-mono font-bold',
    success:
      'bg-[#A3F527]/15 text-[#A3F527] border-[#A3F527]/50 font-mono font-bold',
    outline:
      'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-neutral-800 font-mono',
    dark:
      'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white font-mono',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-[11px] font-mono tracking-wider border rounded-none transition-colors',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
