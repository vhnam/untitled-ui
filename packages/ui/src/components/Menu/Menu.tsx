import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";

import { cn } from "../../utils/cn";

import { Portal } from "../Portal";

export interface MenuProps extends PropsWithChildren {
  id: string;
  style?: CSSProperties;
}

const Menu = (
  { children, id, style }: MenuProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <Portal id={id}>
      <div ref={ref} className={cn("care-menu")} style={style}>
        {children}
      </div>
    </Portal>
  );
};

export default forwardRef(Menu);
