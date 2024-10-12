import { ReactNode } from 'react';

import { cn } from '../../utils/cn';

export interface TabPanelProps {
  active?: boolean;
  children: ReactNode;
}

const TabPanel = ({ active, children }: TabPanelProps) => {
  return (
    <div
      className={cn('care-tabs__panel', {
        'care-tabs__panel--active': active,
      })}
    >
      {children}
    </div>
  );
};

export default TabPanel;
