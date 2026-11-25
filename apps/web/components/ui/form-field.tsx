import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  required = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <label
      className={`block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5 font-arabic-reading ${className}`}
      {...props}
    >
      {children}
      {required ? (
        <span className="ms-1 text-accent-primary" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={error ? 'true' : undefined}
        className={`w-full rounded-sm border bg-bg-surface px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-1 font-arabic-reading min-h-[44px]
          ${error ? 'border-accent-primary' : 'border-border-default hover:border-border-strong'}
          ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export type HelperTextProps = React.HTMLAttributes<HTMLParagraphElement>;

export const HelperText: React.FC<HelperTextProps> = ({ className = '', children, ...props }) => {
  return (
    <p
      className={`mt-1.5 text-xs text-text-muted font-arabic-reading leading-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export type ErrorMessageProps = React.HTMLAttributes<HTMLParagraphElement>;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <p
      role="alert"
      className={`mt-1.5 text-xs font-medium text-accent-primary font-arabic-reading leading-normal ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
