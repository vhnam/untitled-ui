'use client';

import { Tabs } from '@repo/ui';
import { useState } from 'react';

import ServicesListing from '../../modules/services/services-listing';

export default function Page(): JSX.Element {
  const [value, setValue] = useState('all');

  return (
    <main>
      <Tabs
        onChange={setValue}
        value={value}
        items={[
          {
            value: 'all',
            label: 'All',
            children: <ServicesListing />,
          },
          {
            value: 'sub-1',
            label: 'Sub cat 1',
            children: <ServicesListing />,
          },
          {
            value: 'sub-2',
            label: 'Sub cat 2',
            children: <ServicesListing />,
          },
          {
            value: 'sub-3',
            label: 'Sub cat 3',
            children: <ServicesListing />,
          },
          {
            value: 'sub-4',
            label: 'Sub cat 4',
            children: <ServicesListing />,
          },
        ]}
      />
    </main>
  );
}
