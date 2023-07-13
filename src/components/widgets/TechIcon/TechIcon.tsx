import React from "react";
import styles from './TechIcon.module.css';


type Props = {
  tech: string;
  small?: boolean;
}

const TechIcon: React.FC<Props> = ({ tech, small }) => {
  return (
    <div className={styles.techIcon_container}>
      <img
        className={`${styles.techIcon} ${small ? styles.techIcon_small : ''}`}
        src={`src/assets/icons/${tech}.svg`}
        alt={tech}
        title={tech}
      />
      <p className={styles.techIcon_name}>{tech}</p>
    </div>
  );
}

export default TechIcon;