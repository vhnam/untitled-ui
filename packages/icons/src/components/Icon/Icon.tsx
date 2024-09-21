import * as Icons from "../../icons";

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: IconName;
}

const Icon = ({ name }: IconProps) => {
  const IconComponent = Icons[name];

  return <IconComponent />;
};

export default Icon;
