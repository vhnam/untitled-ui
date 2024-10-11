import { PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../utils/cn';

export type ButtonColor = 'default' | 'positive' | 'negative' | 'inherit';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  color?: ButtonColor;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  size?: 'default' | 'small';
  trailingIcon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
}

const Button = ({
  children,
  className,
  color = 'default',
  disabled = false,
  type = 'button',
  leadingIcon,
  size = 'default',
  trailingIcon,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <button
      className={cn('care-button', className, {
        ['care-button__default care-button--primary']:
          color === 'default' && variant === 'primary',
        ['care-button__default care-button--secondary']:
          color === 'default' && variant === 'secondary',
        ['care-button__default care-button--tertiary']:
          color === 'default' && variant === 'tertiary',
        ['care-button__positive care-button--primary']:
          color === 'positive' && variant === 'primary',
        ['care-button__positive care-button--secondary']:
          color === 'positive' && variant === 'secondary',
        ['care-button__positive care-button--tertiary']:
          color === 'positive' && variant === 'tertiary',
        ['care-button__negative care-button--primary']:
          color === 'negative' && variant === 'primary',
        ['care-button__negative care-button--secondary']:
          color === 'negative' && variant === 'secondary',
        ['care-button__negative care-button--tertiary']:
          color === 'negative' && variant === 'tertiary',
        ['care-button__inherit']: color === 'inherit',
        ['care-button--small']: size === 'small',
      })}
      disabled={disabled}
      type={type}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
};

export default Button;
