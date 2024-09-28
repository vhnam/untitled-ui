import { Icon, IconName } from '@repo/icons';
import { PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

export interface ChipProps extends PropsWithChildren {
  contrast?: 'low' | 'high';
  leadingIcon?: IconName;
  state?: 'active' | 'inactive';
  trailingIcon?: IconName;
}

const Chip = ({
  children,
  leadingIcon,
  trailingIcon,
  state = 'inactive',
}: ChipProps) => {
  return (
    <div
      className={cn('care-chip', {
        ['care-chip--active']: state === 'active',
      })}
    >
      {leadingIcon && <Icon name={leadingIcon} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} />}
    </div>
  );
};

export default Chip;
