import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-primary text-palette-paper-ivory hover:bg-accent-hover active:bg-accent-active border border-transparent shadow-none',
  secondary:
    'bg-bg-secondary text-text-primary hover:bg-palette-warm-sand/80 border border-border-subtle shadow-none',
  outline:
    'bg-transparent text-text-primary border border-border-default hover:bg-bg-secondary/60 active:bg-bg-secondary shadow-none',
  ghost:
    'bg-transparent text-text-primary hover:bg-bg-secondary/60 active:bg-bg-secondary border border-transparent shadow-none',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs min-h-[36px]',
  md: 'px-5 py-2.5 text-sm min-h-[44px]', // 44px minimum touch target for mobile accessibility
  lg: 'px-7 py-3 text-base min-h-[48px]',
};

/**
 * Tactile Literary Button Primitive
 * Designed with fine print restraint: zero glossy SaaS gradients or excessive shadows.
 * Features accessible focus states, minimum touch targets, and restrained 2px corners.
 */
export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 font-medium font-arabic-reading !tracking-normal rounded-sm transition-colors duration-base ease-literary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 select-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-label="جارٍ التحميل..."
        />
      ) : null}
      {children}
    </button>
  );
};
