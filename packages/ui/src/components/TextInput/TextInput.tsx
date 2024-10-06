import {
  FocusEvent,
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';

import useInputValue from '../../hooks/useInputValue';
import { cn } from '../../utils/cn';

export interface TextInputProps {
  autoComplete?: 'off';
  className?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  isShowLabel?: boolean;
  label: string;
  name: string;
  helperText?: string;
  trailingIcon?: ReactNode;
  suffix?: string;
  value?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const TextInput = (
  {
    className,
    disabled = false,
    error = false,
    errorMessage,
    isShowLabel,
    label,
    helperText,
    trailingIcon,
    suffix,
    value,
    onBlur,
    onFocus,
    ...props
  }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);
  const { hasValue, committedValue, onValueChange } = useInputValue(value);

  const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <div
      className={cn(
        'care-textInput',
        {
          ['care-textInput--disabled']: disabled,
          ['care-textInput--error']: error,
          ['care-textInput--focused']: isFocused || isShowLabel || hasValue,
        },
        className
      )}
    >
      <div className="care-textInput__container" ref={ref}>
        <label className="care-textInput__label">{label}</label>
        <input
          className={cn('care-textInput__input')}
          disabled={disabled}
          value={committedValue}
          onBlur={handleInputBlur}
          onChange={onValueChange}
          onFocus={handleInputFocus}
          {...props}
        />
        {trailingIcon && (
          <div className={cn('care-textInput__trailingIcon')}>
            {trailingIcon}
          </div>
        )}
        {suffix && <div className={cn('care-textInput__suffix')}>{suffix}</div>}
      </div>
      {helperText && (
        <div className={cn('care-textInput__helperText')}>{helperText}</div>
      )}
      {errorMessage && (
        <div className={cn('care-textInput__errorMessage')}>{errorMessage}</div>
      )}
    </div>
  );
};

export default forwardRef(TextInput);
