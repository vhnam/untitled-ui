import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export interface PortalProps extends PropsWithChildren {
  id: string;
}

const Portal = ({ children, id }: PortalProps) => {
  return createPortal(
    <div id={`portal__${id}`}>{children}</div>,
    document.body,
  );
};

export default Portal;
