import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-medium rounded-full transition-all duration-220',
        'focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'hover:scale-105 active:scale-95',
        variant === 'primary' &&
          'bg-brand text-white hover:shadow-sh3 active:translate-y-0.5',
        variant === 'outline' &&
          'border border-brand text-brand hover:bg-brand-soft',
        variant === 'ghost' && 'text-brand hover:bg-brand-soft',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
      {...props}
    />
  );
}
