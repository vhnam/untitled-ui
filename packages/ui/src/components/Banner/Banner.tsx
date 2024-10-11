import { ReactNode } from 'react';

import { cn } from '../../utils/cn';

import { IconButton } from '../IconButton';

export type BannerColor =
  | 'negative'
  | 'positive'
  | 'attention'
  | 'information'
  | 'neutral';

export interface BannerProps {
  action?: ReactNode;
  color?: BannerColor;
  leadingIcon?: ReactNode;
  title: string;
  subtitle?: string;
  persistent?: boolean;
}

const Banner = ({
  action,
  color = 'neutral',
  leadingIcon,
  title,
  subtitle,
  persistent = false,
}: BannerProps) => {
  return (
    <div
      className={cn('care-banner', {
        'care-banner--negative': color === 'negative',
        'care-banner--positive': color === 'positive',
        'care-banner--attention': color === 'attention',
        'care-banner--information': color === 'information',
        'care-banner--neutral': color === 'neutral',
      })}
    >
      <div className={cn('care-banner__leading-icon')}>{leadingIcon}</div>
      <div className={cn('care-banner__container')}>
        <div>
          <div className={cn('care-banner__title')}>{title}</div>
          <div className={cn('care-banner__subtitle')}>{subtitle}</div>
        </div>
        <div>{action}</div>
      </div>
      <div>
        {!persistent && <IconButton iconName="Close" color="inherit" />}
      </div>
    </div>
  );
};

export default Banner;
