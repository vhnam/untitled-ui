import { MouseEvent, useContext } from "react";

import MenuContext from "./Menu.context";

import { cn } from "../../utils/cn";

export interface MenuItemProps {
  label: string;
  value: string;
  onClick?: (value: string) => void;
}

const MenuItem = ({ label, value, onClick }: MenuItemProps) => {
  const menuContext = useContext(MenuContext);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    menuContext?.onClick(value);
    onClick && onClick(value);
  };

  return (
    <div className={cn("care-menu__item")} onClick={handleClick}>
      {label}
    </div>
  );
};

export default MenuItem;
