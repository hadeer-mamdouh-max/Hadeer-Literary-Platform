import React from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingFont = 'arabic-display' | 'arabic-reading' | 'english-display' | 'inherit';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  variant?: HeadingVariant;
  font?: HeadingFont;
}

const variantStyles: Record<HeadingVariant, string> = {
  display: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight',
  h1: 'text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
  h2: 'text-2xl sm:text-3xl font-semibold leading-snug',
  h3: 'text-xl sm:text-2xl font-semibold leading-snug',
  h4: 'text-lg sm:text-xl font-medium leading-normal',
  h5: 'text-base sm:text-lg font-medium leading-normal',
  h6: 'text-sm sm:text-base font-medium leading-normal',
};

const fontStyles: Record<HeadingFont, string> = {
  'arabic-display': 'font-arabic-display',
  'arabic-reading': 'font-arabic-reading',
  'english-display': 'font-english-display',
  inherit: '',
};

/**
 * Editorial Heading Primitive
 * Enforces balanced headline wrapping, restrained weights,
 * and zero positive letter spacing in Arabic.
 */
export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  variant,
  font = 'arabic-display',
  className = '',
  children,
  ...props
}) => {
  const Component = `h${level}` as const;
  const resolvedVariant = variant || (`h${level}` as HeadingVariant);

  return (
    <Component
      className={`text-text-primary text-balance !tracking-normal ${variantStyles[resolvedVariant]} ${fontStyles[font]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
