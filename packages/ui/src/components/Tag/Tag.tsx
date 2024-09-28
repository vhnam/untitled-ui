import { Icon, IconName } from '@repo/icons';
import { PropsWithChildren } from 'react';

import { cn } from '../../utils/cn';

export interface TagProps extends PropsWithChildren {
  contrast?: 'low' | 'high';
  icon?: IconName;
  size?: 'large' | 'small';
  variant?: 'neutral' | 'negative' | 'attention' | 'positive' | 'informative';
}

const Tag = ({
  children,
  contrast = 'low',
  icon,
  size = 'large',
  variant = 'neutral',
}: TagProps) => {
  return (
    <div
      className={cn('care-tag', {
        ['care-tag__low care-tag--neutral']:
          contrast === 'low' && variant === 'neutral',
        ['care-tag__low care-tag--negative']:
          contrast === 'low' && variant === 'negative',
        ['care-tag__low care-tag--attention']:
          contrast === 'low' && variant === 'attention',
        ['care-tag__low care-tag--positive']:
          contrast === 'low' && variant === 'positive',
        ['care-tag__low care-tag--informative']:
          contrast === 'low' && variant === 'informative',
        ['care-tag__high care-tag--neutral']:
          contrast === 'high' && variant === 'neutral',
        ['care-tag__high care-tag--negative']:
          contrast === 'high' && variant === 'negative',
        ['care-tag__high care-tag--attention']:
          contrast === 'high' && variant === 'attention',
        ['care-tag__high care-tag--positive']:
          contrast === 'high' && variant === 'positive',
        ['care-tag__high care-tag--informative']:
          contrast === 'high' && variant === 'informative',
        ['care-tag--small']: size === 'small',
      })}
    >
      {icon && (
        <Icon
          name={icon}
          width={size === 'small' ? 12 : 20}
          height={size === 'small' ? 12 : 20}
        />
      )}
      {children}
    </div>
  );
};

export default Tag;
