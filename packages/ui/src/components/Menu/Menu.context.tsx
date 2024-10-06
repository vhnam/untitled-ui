import { createContext } from "react";

export interface MenuContextProps {
  onClick: (value: string) => void;
}

const MenuContext = createContext<MenuContextProps | null>(null);

export default MenuContext;
