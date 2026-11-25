import React from 'react';

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * Literary Prose Container
 * Dedicated reading canvas for continuous Arabic essays, reflections, and chapters.
 * Enforces optimal reading column width (68ch), relaxed leading (1.85),
 * intentional paragraph margins, and tactile print details.
 */
export const Prose: React.FC<ProseProps> = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`mx-auto max-w-reading text-text-primary font-arabic-reading leading-[1.85] text-base sm:text-lg
        [&>p]:mb-6 [&>p:last-child]:mb-0
        [&>blockquote]:my-8 [&>blockquote]:border-s-2 [&>blockquote]:border-accent-primary [&>blockquote]:ps-6 [&>blockquote]:pe-2 [&>blockquote]:text-text-secondary [&>blockquote]:italic
        [&>h2]:font-arabic-display [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-text-primary
        [&>h3]:font-arabic-display [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-text-primary
        [&>hr]:my-10 [&>hr]:border-border-subtle
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
