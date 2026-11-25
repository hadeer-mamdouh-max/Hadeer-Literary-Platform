import React from 'react';

export type DividerVariant = 'line' | 'ornament' | 'subtle';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: DividerVariant;
}

/**
 * Editorial Divider Primitive
 * Evokes the tactile craft of traditional book typesetting and printing ornaments.
 */
export const Divider: React.FC<DividerProps> = ({ variant = 'line', className = '', ...props }) => {
  if (variant === 'ornament') {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={`my-12 flex items-center justify-center gap-4 text-accent-primary/60 ${className}`}
        {...props}
      >
        <div className="h-[1px] flex-1 max-w-xs bg-border-subtle" />
        <span
          className="select-none text-xs tracking-widest text-accent-primary"
          aria-hidden="true"
        >
          ✦
        </span>
        <div className="h-[1px] flex-1 max-w-xs bg-border-subtle" />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <hr className={`my-8 border-0 border-t border-border-subtle/50 ${className}`} {...props} />
    );
  }

  return <hr className={`my-8 border-0 border-t border-border-subtle ${className}`} {...props} />;
};
