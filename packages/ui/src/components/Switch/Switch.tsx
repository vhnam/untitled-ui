import { Icon } from '@repo/icons';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { cn } from '../../utils/cn';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({
  checked = false,
  defaultChecked,
  disabled = false,
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? checked);

  const switchIcon = useMemo(() => {
    if (isChecked) return 'SwitchOn';
    return 'SwitchOff';
  }, [isChecked]);

  const handleClickSwitch = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    setIsChecked(defaultChecked ?? checked);
  }, [defaultChecked, checked]);

  return (
    <div
      className={cn('care-switch', {
        ['care-switch--disabled']: disabled,
        ['care-switch--checked']: isChecked,
      })}
      onClick={handleClickSwitch}
    >
      <input className={cn('care-switch__input')} type="checkbox" {...props} />
      <div className="care-switch__container">
        <Icon name={switchIcon} viewBox="0 0 24 24" />
      </div>
    </div>
  );
};

export default Switch;
