import React from "react";

import Card from "../Card";

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
          <div key={`${name}-${color}`}>
            <Card
              lead={color}
              title="Color"
              content={colors[color].toUpperCase()}
              leading={
                <div
                  className={styles.preview}
                  style={{
                    backgroundColor: colors[color],
                  }}
                >
                  &nbsp;
                </div>
              }
            />
          </div>
        ))}
    </div>
  );
};

export default DesignSystemPalette;
