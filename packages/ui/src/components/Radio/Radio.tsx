'use client';

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

export interface RadioProps extends PropsWithChildren {
  checked?: boolean;
  disabled?: boolean;
  name: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  checked,
  children,
  disabled = false,
  id,
  onChange,
  ...props
}: RadioProps) => {
  const [radioId, setRadioId] = useState<string>();
  const [isChecked, setIsChecked] = useState(checked);

  const radioIcon = useMemo(() => {
    if (isChecked) return 'Radio';
    return 'RadioOutline';
  }, [isChecked]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);

    if (onChange) {
      onChange(e);
    }
  };

  useEffect(() => {
    setRadioId(id ?? nanoid(10));

    return () => {
      setRadioId(undefined);
    };
  }, []);

  return (
    <div
      className={cn('care-radio', {
        ['care-radio--disabled']: disabled,
      })}
    >
      <label htmlFor={radioId} className={cn('care-radio__container')}>
        <input
          className={cn('care-radio__input')}
          id={radioId}
          type="radio"
          onChange={handleOnChange}
          {...props}
        />
        <div className={cn('care-radio__icon')}>
          <Icon name={radioIcon} />
        </div>
        <div className={cn('care-radio__label')}>{children}</div>
      </label>
    </div>
  );
};

export default Radio;
