import React, { ReactNode } from "react";

import styles from "./Card.module.css";

interface IProps {
  lead: string;
  title: string;
  content: ReactNode;
  leading?: ReactNode;
}

const Card = ({ lead, title, content, leading }: IProps) => {
  return (
    <div>
      <div className={styles.lead}>{lead}</div>
      <div className={styles.container}>
        {leading}
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
