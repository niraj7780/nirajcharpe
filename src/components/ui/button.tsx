import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'lime' | 'electric' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[#A3F527] disabled:opacity-50 disabled:pointer-events-none active:translate-y-0.5 select-none rounded-none border';

    const variants = {
      primary:
        'bg-black text-white hover:bg-neutral-800 border-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:border-white',
      lime:
        'bg-[#A3F527] text-black border-[#A3F527] hover:bg-[#8AE40E] shadow-[0_0_15px_rgba(163,245,39,0.3)] hover:shadow-[0_0_20px_rgba(163,245,39,0.5)]',
      electric:
        'bg-[#A3F527] text-black border-[#A3F527] hover:bg-[#8AE40E] shadow-[0_0_15px_rgba(163,245,39,0.3)] hover:shadow-[0_0_20px_rgba(163,245,39,0.5)]',
      secondary:
        'bg-neutral-100 text-black hover:bg-neutral-200 border-neutral-300 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:border-neutral-700',
      outline:
        'border-neutral-300 dark:border-neutral-800 bg-transparent text-neutral-900 dark:text-white hover:border-[#A3F527] hover:text-[#A3F527]',
      ghost:
        'bg-transparent border-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900',
    };

    const sizes = {
      sm: 'text-[11px] px-3 py-1.5 gap-1.5',
      md: 'text-xs px-4 py-2.5 gap-2',
      lg: 'text-xs px-6 py-3.5 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
