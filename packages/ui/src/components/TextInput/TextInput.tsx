import { ReactNode, useState } from "react";

import useInputValue from "../../hooks/useInputValue";
import { cn } from "../../utils/cn";

export interface TextInputProps {
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label: string;
  name: string;
  helperText?: string;
  trailingIcon?: ReactNode;
  suffix?: string;
  value?: string;
}

const TextInput = ({
  disabled = false,
  error = false,
  errorMessage,
  label,
  helperText,
  trailingIcon,
  suffix,
  value,
  ...props
}: TextInputProps) => {
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
      className={cn("care-textInput", {
        ["care-textInput--disabled"]: disabled,
        ["care-textInput--error"]: error,
        ["care-textInput--focused"]: isFocused || hasValue,
      })}
    >
      <div className="care-textInput__container">
        <label className="care-textInput__label">{label}</label>
        <input
          className={cn("care-textInput__input")}
          disabled={disabled}
          onChange={onValueChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={committedValue}
          {...props}
        />
        {trailingIcon && (
          <div className={cn("care-textInput__trailingIcon")}>
            {trailingIcon}
          </div>
        )}
        {suffix && <div className={cn("care-textInput__suffix")}>{suffix}</div>}
      </div>
      {helperText && (
        <div className={cn("care-textInput__helperText")}>{helperText}</div>
      )}
      {errorMessage && (
        <div className={cn("care-textInput__errorMessage")}>{errorMessage}</div>
      )}
    </div>
  );
};

export default TextInput;
