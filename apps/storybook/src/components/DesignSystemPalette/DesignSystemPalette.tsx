import React from "react";

import styles from "./DesignSystemPalette.module.css";

interface IProps {
  name: string;
  colors: Record<string, string>;
}

const DesignSystemPalette = ({ name, colors }: IProps) => {
  return (
    <div className={styles.container}>
      {Object.keys(colors)
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map((color) => (
          <div key={`${name}-${color}`} className={styles.palette}>
            <div className={styles.shade}>{color}</div>
            <div className={styles.content}>
              <div
                className={styles.preview}
                style={{
                  backgroundColor: colors[color],
                }}
              >
                &nbsp;
              </div>
              <div className={styles.info}>
                <div className={styles.title}>Color</div>
                <div className={styles.colorHex}>
                  {colors[color].toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DesignSystemPalette;
