import * as Icons from '../../icons';

export type IconName = keyof typeof Icons;

export interface IconProps {
  className?: string;
  height?: number;
  name: IconName;
  viewBox?: string;
  width?: number;
}

const Icon = ({
  height = 20,
  name,
  viewBox = '0 0 20 20',
  width = 20,
  ...props
}: IconProps) => {
  const IconComponent = Icons[name];

  return (
    <IconComponent width={width} height={height} viewBox={viewBox} {...props} />
  );
};

export default Icon;
