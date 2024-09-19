import React from "react";

import styles from "./Elevation.module.css";

type ElevationType = {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  type: string;
};

interface IProps {
  value: ElevationType[];
}

const argb2rgba = (color: string) => {
  return "#" + color.slice(3, 9) + color[1] + color[2];
};

const Elevation = ({ value }: IProps) => {
  const boxShadow = value
    .map(
      ({ x, y, blur, spread, color }: ElevationType) =>
        `${x}px ${y}px ${blur}px ${spread}px ${argb2rgba(color)}`
    )
    .join(", ");

  return (
    <div>
      <div
        className={styles.container}
        style={{
          boxShadow,
        }}
      >
        &nbsp;
      </div>
      <code>box-shadow: {boxShadow}</code>
    </div>
  );
};

export default Elevation;
