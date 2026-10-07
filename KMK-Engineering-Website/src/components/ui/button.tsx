import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};
export function Button({ className, variant = 'default', size = 'default', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={cn(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2',
    variant === 'ghost' ? 'bg-transparent hover:bg-accent' : variant === 'outline' ? 'border bg-background' : 'bg-primary text-primary-foreground',
    size === 'icon' ? 'size-9' : size === 'sm' ? 'h-8 px-3' : size === 'lg' ? 'h-10 px-6' : 'h-9 px-4', className,
  )} {...props} />;
}
