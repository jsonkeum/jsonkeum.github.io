import React from "react";
import styles from './LastPage.module.css';
import githubIcon from '../../../assets/icons/github.svg';
import linkedInIcon from '../../../assets/icons/linkedin.svg';

const LastPage: React.FC = () => {
  return (
    <div className={styles.LastPage_container}>
      <h1 className={styles.LastPage_header}>Questions?</h1>
      <p>Connect with me below</p>
      <div className={styles.LastPage_socials}>
        <div>
          <a href="https://github.com/jsonkeum" target="_blank" title="Visit my github">
            <img src={githubIcon} alt='Visit my github' />
          </a>
        </div>
        <a href="https://www.linkedin.com/in/jasonkeum" target="_blank" title="Visit my linkedin">
          <img src={linkedInIcon} alt='Visit my linkedin' />
        </a>
      </div>
    </div>
  )
}

export default LastPage;