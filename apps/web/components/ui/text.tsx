import React from 'react';

export type TextVariant = 'body-lg' | 'body' | 'body-sm' | 'caption' | 'metadata';
export type TextColor = 'primary' | 'secondary' | 'muted' | 'accent';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div' | 'time' | 'figcaption';
  variant?: TextVariant;
  color?: TextColor;
  pretty?: boolean;
}

const variantStyles: Record<TextVariant, string> = {
  'body-lg': 'text-lg sm:text-xl leading-[1.85]',
  body: 'text-base sm:text-lg leading-[1.85]',
  'body-sm': 'text-sm sm:text-base leading-[1.75]',
  caption: 'text-xs sm:text-sm leading-relaxed',
  metadata: 'text-xs font-medium tracking-normal leading-normal uppercase',
};

const colorStyles: Record<TextColor, string> = {
  primary: 'text-text-primary',
  secondary: 'text-text-secondary',
  muted: 'text-text-muted',
  accent: 'text-text-accent',
};

/**
 * Editorial Text Primitive
 * Enforces reading line-height (1.85), fluid body scales,
 * and semantic WCAG AA accessible contrast levels.
 */
export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  color = 'primary',
  pretty = true,
  className = '',
  children,
  ...props
}) => {
  return (
    <Component
      className={`font-arabic-reading !tracking-normal ${pretty ? 'text-pretty' : ''} ${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
