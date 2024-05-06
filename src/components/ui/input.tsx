import * as React from 'react';

import { cn } from './utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[74px]  text-[20px] font-[500] w-full rounded-full px-[36px] py-[24px] border border-input bg-[#EFEFEF] focus:bg-[#F5F8FF]  ring-offset-background file:border-0  file:text-sm focus:ring-[#537FF1] file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
