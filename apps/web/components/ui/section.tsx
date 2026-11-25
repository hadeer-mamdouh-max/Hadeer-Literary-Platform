import React from 'react';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'header' | 'footer';
  spacing?: SectionSpacing;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: 'py-0',
  sm: 'py-6 sm:py-8',
  md: 'py-10 sm:py-16',
  lg: 'py-16 sm:py-24',
  xl: 'py-24 sm:py-32',
};

/**
 * Editorial Section Primitive
 * Establishes intentional vertical rhythm and breathing room
 * between editorial spaces without arbitrary margins.
 */
export const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  spacing = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <Component className={`w-full ${spacingClasses[spacing]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
