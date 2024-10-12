import { IconButton, TopNavigation } from '@repo/ui';
import { PropsWithChildren } from 'react';

const ServicesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <TopNavigation
        title="Category name"
        leading={<IconButton iconName="ArrowBack" />}
      />
      {children}
    </div>
  );
};

export default ServicesLayout;
