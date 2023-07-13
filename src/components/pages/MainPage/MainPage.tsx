import React from "react";
import styles from './MainPage.module.css';

const MainPage: React.FC = () => {
  return (
    <div className={styles.MainPage_container}>
      <h1 className={styles.MainPage_header}>Jason Keum</h1>
      <p>Welcome to my portfolio!</p>
    </div>
  )
}

export default MainPage;