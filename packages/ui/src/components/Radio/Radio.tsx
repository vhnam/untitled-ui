import { nanoid } from "nanoid";
import { PropsWithChildren, useEffect, useState } from "react";

import { cn } from "../../utils/cn";

export interface RadioProps extends PropsWithChildren {
  disabled?: boolean;
  name: string;
  id?: string;
}

const Radio = ({ children, disabled = false, id, ...props }: RadioProps) => {
  const [radioId, setRadioId] = useState<string>();

  useEffect(() => {
    setRadioId(id ?? nanoid(10));

    return () => {
      setRadioId(undefined);
    };
  }, []);

  return (
    <div
      className={cn("care-radio", {
        ["care-radio--disabled"]: disabled,
      })}
    >
      <label htmlFor={radioId} className={cn("care-radio__container")}>
        <input
          className={cn("care-radio__input")}
          id={radioId}
          type="radio"
          {...props}
        />
        <div className={cn("care-radio__circleContainer")}>
          <div className={cn("care-radio__circle")}></div>
        </div>
        <div className={cn("care-radio__label")}>{children}</div>
      </label>
    </div>
  );
};

export default Radio;
