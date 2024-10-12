import { Icon, type IconName } from '@repo/icons';

import { cn } from '../../utils/cn';
import { ReactNode } from 'react';

export interface TabProps {
  label: string;
  active?: boolean;
  value: string;
  disabled?: boolean;
  leadingIcon?: IconName;
  children: ReactNode;
  onClick?: () => void;
}

const Tab = ({
  disabled = false,
  label,
  leadingIcon,
  active,
  onClick,
}: TabProps) => {
  return (
    <div
      className={cn('care-tabs__tab', {
        ['care-tabs__tab--active']: active,
        ['care-tabs__tab--disabled']: disabled,
      })}
      role="tab"
      onClick={onClick}
    >
      <div className={cn('care-tabs__tab-container')}>
        {leadingIcon && <Icon name={leadingIcon} />}
        <div className={cn('care-tabs__tab-label')}>{label}</div>
      </div>
    </div>
  );
};

export default Tab;
