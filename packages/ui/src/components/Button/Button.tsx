import { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return <button className="bg-neutral-700">{children}</button>;
};

export default Button;
