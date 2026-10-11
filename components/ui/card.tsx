import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-[var(--border)] shadow-sh2 p-6 lg:p-8',
        'transition-all duration-220 hover:shadow-sh3 hover:scale-105 hover:-translate-y-3',
        className
      )}
      {...props}
    />
  );
}
