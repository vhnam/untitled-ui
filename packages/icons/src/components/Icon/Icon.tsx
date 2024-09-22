import * as Icons from "../../icons";

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
}

const Icon = ({ name, width = 20, height = 20 }: IconProps) => {
  const IconComponent = Icons[name];

  return <IconComponent width={width} height={height} viewBox="0 0 20 20" />;
};

export default Icon;
