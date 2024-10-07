import { ReactNode } from 'react';

import { cn } from '../../utils/cn';

export interface ListItemProps {
  className?: string;
  leadingAdornment?: ReactNode;
  subtitle?: string;
  title: string;
  trailingAdornment?: ReactNode;
}

const ListItem = ({
  className,
  leadingAdornment,
  subtitle,
  title,
  trailingAdornment,
}: ListItemProps) => {
  return (
    <li className={cn('care-list-item', className)}>
      {trailingAdornment && <div>{trailingAdornment}</div>}
      <div className={cn('care-list-item__container')}>
        <div className={cn('care-list-item__title')}>{title}</div>
        {subtitle && (
          <div className={cn('care-list-item__subtitle')}>{subtitle}</div>
        )}
      </div>
      {leadingAdornment && <div>{leadingAdornment}</div>}
    </li>
  );
};

export default ListItem;
