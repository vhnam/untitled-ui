import { cn } from '../../utils/cn';

import Tab, { type TabProps as OriginalTabProps } from './Tab';
import TabPanel from './TabPanel';

export interface TabProps
  extends Omit<OriginalTabProps, 'value' | 'onChange'> {}

export interface TabsProps {
  items: OriginalTabProps[];
  value: string;
  onChange?: (value: string) => void;
}

const Tabs = ({ items, value, onChange }: TabsProps) => {
  const handleTabChange = (value: string) => {
    onChange?.(value);
  };
  return (
    <div className={cn('care-tabs')}>
      <div
        className={cn('care-tabs__container', 'scrollbar-none')}
        role="tablist"
      >
        {items.map((item) => (
          <Tab
            key={item.value}
            active={value === item.value}
            {...item}
            onClick={() => handleTabChange(item.value)}
          />
        ))}
      </div>
      <div className={cn('care-tabs__panels')}>
        {items.map((item) => (
          <TabPanel
            key={item.value}
            children={item.children}
            active={value === item.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
