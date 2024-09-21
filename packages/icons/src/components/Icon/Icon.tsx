import * as Icons from "../../icons";

export type IconNameType = keyof typeof Icons;

export interface IconProps {
  name: IconNameType;
}

const Icon = ({ name }: IconProps) => {
  const IconComponent = Icons[name];

  return <IconComponent />;
};

export default Icon;
