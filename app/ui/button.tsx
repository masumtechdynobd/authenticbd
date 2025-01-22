import { cn } from '@/lib/utils';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        'flex  items-center rounded-[30px] bg-primary px-4 py-[10px] text-sm font-medium text-white hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-primary aria-disabled:cursor-not-allowed aria-disabled:opacity-50 transition-all  duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </button>
  );
}
