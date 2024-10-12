import React from 'react';

import styles from './GradientColor.module.css';

interface IProps {
  colors: string[];
}

const GradientColor = ({ colors }: IProps) => {
  const internalColors = [0, 33, 66, 100].map(
    (percentage, index) => `${colors[index]} ${percentage}%`
  );

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(90deg, ${internalColors.join(', ')})`,
      }}
    >
      &nbsp;
    </div>
  );
};

export default GradientColor;
