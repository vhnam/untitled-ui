import { PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../utils/cn';

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  leadingIcon?: ReactNode;
  size?: 'default' | 'small';
  trailingIcon?: ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'default' | 'positive' | 'negative';
}

const Button = ({
  children,
  disabled = false,
  htmlType = 'button',
  leadingIcon,
  size = 'default',
  trailingIcon,
  type = 'primary',
  variant = 'default',
}: ButtonProps) => {
  return (
    <button
      className={cn('care-button', {
        ['care-button__default care-button--primary']:
          variant === 'default' && type === 'primary',
        ['care-button__default care-button--secondary']:
          variant === 'default' && type === 'secondary',
        ['care-button__default care-button--tertiary']:
          variant === 'default' && type === 'tertiary',
        ['care-button__positive care-button--primary']:
          variant === 'positive' && type === 'primary',
        ['care-button__positive care-button--secondary']:
          variant === 'positive' && type === 'secondary',
        ['care-button__positive care-button--tertiary']:
          variant === 'positive' && type === 'tertiary',
        ['care-button__negative care-button--primary']:
          variant === 'negative' && type === 'primary',
        ['care-button__negative care-button--secondary']:
          variant === 'negative' && type === 'secondary',
        ['care-button__negative care-button--tertiary']:
          variant === 'negative' && type === 'tertiary',
        ['care-button--small']: size === 'small',
      })}
      disabled={disabled}
      type={htmlType}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
};

export default Button;
