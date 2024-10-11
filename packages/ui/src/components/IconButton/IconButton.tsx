import { Icon, type IconName } from '@repo/icons';

import { Button, type ButtonProps } from '../Button';

export type IconButtonColor = 'default' | 'negative' | 'inherit';

export interface IconButtonProps
  extends Pick<ButtonProps, 'disabled' | 'type' | 'className'> {
  color?: 'default' | 'negative' | 'inherit';
  iconName: IconName;
}

const IconButton = ({
  iconName,
  color = 'default',
  ...props
}: IconButtonProps) => {
  return (
    <Button variant="secondary" color={color} size="small" {...props}>
      <Icon name={iconName} />
    </Button>
  );
};

export default IconButton;
