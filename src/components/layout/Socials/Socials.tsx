import React from "react";
import githubIcon from '../../../assets/icons/github.svg';
import linkedInIcon from '../../../assets/icons/linkedin.svg';
import styles from './Socials.module.css';


const Socials: React.FC = () => {
  return (
    <div className={styles.SocialsContainer}>
      <div>
        <a href="https://github.com/jsonkeum" target="_blank" title="Visit my github">
          <img src={githubIcon} alt='Visit my github' />
        </a>
      </div>
      <a href="https://www.linkedin.com/in/jasonkeum" target="_blank" title="Visit my linkedin">
        <img src={linkedInIcon} alt='Visit my linkedin' />
      </a>
    </div>
  )
}

export default Socials;