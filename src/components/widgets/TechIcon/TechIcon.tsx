import React from "react";
import styles from './TechIcon.module.css';

// Bundle every icon so Vite gives each one a correct URL in dev and build.
const icons = import.meta.glob<string>('../../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
});


type Props = {
  tech: string;
  small?: boolean;
}

const TechIcon: React.FC<Props> = ({ tech, small }) => {
  return (
    <div className={styles.techIcon_container}>
      <img
        className={`${styles.techIcon} ${small ? styles.techIcon_small : ''}`}
        src={icons[`../../../assets/icons/${tech}.svg`]}
        alt={tech}
        title={tech}
      />
      <p className={styles.techIcon_name}>{tech}</p>
    </div>
  );
}

export default TechIcon;