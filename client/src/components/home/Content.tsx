import React from 'react';
import styles from './styles/content.module.css';

interface ContentProps {
  style?: React.CSSProperties;
}

const Content: React.FC<ContentProps> = async ({ style }) => {
  return (
    <div style={style}>
      <div className={styles.content}></div>
    </div>
  );
}

export default Content;
