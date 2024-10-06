import { Icon } from '@repo/icons';
import { nanoid } from 'nanoid';
import {
  ChangeEvent,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { cn } from '../../utils/cn';

export interface CheckboxProps extends PropsWithChildren {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: boolean;
  name: string;
  id?: string;
  indeterminate?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  checked = false,
  children,
  defaultChecked,
  disabled = false,
  error = false,
  id,
  indeterminate = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const [checkboxId, setCheckboxId] = useState<string>();
  const [isChecked, setIsChecked] = useState(defaultChecked ?? checked);

  const checkboxIcon = useMemo(() => {
    if (indeterminate) return 'CheckboxIndeterminate';
    if (isChecked) return 'Checkbox';
    return 'CheckboxOutline';
  }, [isChecked, indeterminate]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);

    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    setIsChecked(defaultChecked ?? checked);
  }, [defaultChecked, checked]);

  useEffect(() => {
    setCheckboxId(id ?? nanoid(10));

    return () => {
      setCheckboxId(undefined);
    };
  }, []);

  return (
    <div
      className={cn('care-checkbox', {
        ['care-checkbox--disabled']: disabled,
        ['care-checkbox--error']: error,
      })}
    >
      <label htmlFor={checkboxId} className={cn('care-checkbox__container')}>
        <input
          className={cn('care-checkbox__input')}
          id={checkboxId}
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          {...props}
        />
        <div className={cn('care-checkbox__icon')}>
          <Icon name={checkboxIcon} />
        </div>
        <div className={cn('care-checkbox__label')}>{children}</div>
      </label>
    </div>
  );
};

export default Checkbox;
