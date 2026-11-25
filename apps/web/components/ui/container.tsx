import React from 'react';

export type ContainerSize = 'reading' | 'content' | 'wide' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'main' | 'article' | 'section';
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  reading: 'max-w-reading', // ~68ch, optimized for continuous prose reading
  content: 'max-w-content', // 56rem (896px), standard editorial layout
  wide: 'max-w-wide', // 72rem (1152px), bookstore & archive grids
  full: 'max-w-full', // 80rem (1280px), panoramic boundaries
};

/**
 * Editorial Container Primitive
 * Enforces responsive inline gutters and optical reading widths.
 * Automatically aligns with CSS logical properties and RTL layouts.
 */
export const Container: React.FC<ContainerProps> = ({
  as: Component = 'div',
  size = 'content',
  className = '',
  children,
  ...props
}) => {
  return (
    <Component
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
