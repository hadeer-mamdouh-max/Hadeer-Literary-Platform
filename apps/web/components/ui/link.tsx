import React from 'react';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

export type LinkVariant = 'default' | 'accent' | 'subtle' | 'nav';

export interface LinkProps
  extends NextLinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> {
  variant?: LinkVariant;
  children?: React.ReactNode;
}

const variantStyles: Record<LinkVariant, string> = {
  default:
    'text-text-primary underline decoration-border-default underline-offset-4 hover:decoration-accent-primary hover:text-accent-primary',
  accent:
    'text-accent-primary underline decoration-accent-primary/40 underline-offset-4 hover:decoration-accent-primary hover:text-accent-hover font-medium',
  subtle:
    'text-text-muted hover:text-text-primary decoration-transparent underline underline-offset-4 hover:decoration-border-default',
  nav: 'text-text-secondary hover:text-text-primary font-medium transition-colors duration-fast no-underline',
};

/**
 * Editorial Link Primitive
 * Provides literary typography link styling with purposeful underline offsets.
 */
export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  return (
    <NextLink
      className={`inline-flex items-center gap-1 font-arabic-reading !tracking-normal transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 rounded-sm ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </NextLink>
  );
};
