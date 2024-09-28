import { Icon, type IconName } from '@repo/icons';
import { Button, type ButtonProps } from '../Button';

export interface IconButtonProps
  extends Pick<ButtonProps, 'disabled' | 'htmlType'> {
  iconName: IconName;
  variant?: 'default' | 'negative';
}

const IconButton = ({
  iconName,
  variant = 'default',
  ...props
}: IconButtonProps) => {
  return (
    <Button type="secondary" variant={variant} size="small" {...props}>
      <Icon name={iconName} />
    </Button>
  );
};

export default IconButton;
