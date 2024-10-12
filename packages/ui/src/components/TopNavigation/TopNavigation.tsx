import { ReactNode } from 'react';

import { cn } from '../../utils/cn';

export type TopNavigationState = 'default' | 'compressed';

export interface TopNavigationProps {
  actions?: ReactNode;
  leading?: ReactNode;
  title?: string;
  state?: TopNavigationState;
}

const TopNavigation = ({
  actions,
  leading,
  title,
  state = 'default',
}: TopNavigationProps) => {
  return (
    <div
      className={cn('care-top-navigation', {
        'care-top-navigation--compressed': state === 'compressed',
      })}
    >
      <div className={cn('care-top-navigation__actions')}>
        <div>{leading}</div>
        <div>{actions}</div>
      </div>
      <div className={cn('care-top-navigation__title')}>{title}</div>
    </div>
  );
};

export default TopNavigation;
