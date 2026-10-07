import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, type = 'text', ...props }: ComponentProps<'input'>) {
  return <input type={type} className={cn('flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2', className)} {...props} />;
}
