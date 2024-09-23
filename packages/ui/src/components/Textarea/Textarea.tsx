import { useState } from "react";

import useInputValue from "../../hooks/useInputValue";
import { cn } from "../../utils/cn";

export interface TextareaProps {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  label: string;
  maxLength?: number;
  name: string;
  rows?: number;
  showCount?: boolean;
  value?: string;
}

const Textarea = ({
  disabled = false,
  error = false,
  errorMessage,
  label,
  helperText,
  maxLength,
  rows = 7,
  showCount = false,
  value,
  ...props
}: TextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { hasValue, committedValue, onValueChange } = useInputValue(value);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={cn("care-textarea", {
        ["care-textarea--disabled"]: disabled,
        ["care-textarea--error"]: error,
        ["care-textarea--focused"]: isFocused || hasValue,
      })}
    >
      <div className="care-textarea__container">
        <label className="care-textarea__label">{label}</label>
        <textarea
          className={cn("care-textarea__input")}
          disabled={disabled}
          maxLength={maxLength}
          onChange={onValueChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          rows={rows}
          value={committedValue}
          {...props}
        />
      </div>
      <div className="care-textarea__helper">
        <div>
          {helperText && (
            <div className={cn("care-textarea__helperText")}>{helperText}</div>
          )}
          {errorMessage && (
            <div className={cn("care-textarea__errorMessage")}>
              {errorMessage}
            </div>
          )}
        </div>
        {showCount && maxLength && (
          <span className="care-textarea__countNumber">
            {maxLength - (committedValue?.length || 0)}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default Textarea;
