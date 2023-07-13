import React, { useMemo } from "react";
import styles from './PageDots.module.css';
import projects from '../../../data/timeline.json';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};


const colors = projects.map(p => p.bgColor)

const PageDots: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = useMemo(() => {
    const res = [];
    for (let i = 0; i < totalPages; i++) {
      res.push(i);
    }
    return res;
  }, [totalPages])

  const onClickHandler = (page: number) => {
    if (page == currentPage) return;
    onPageChange(page)
  }

  return (
    <div className={styles.pageDotsContainer}>
      {pages.map((index: number) => <div 
        key={index}
        className={`${styles.pageDot} ${index == currentPage ? styles.pageDotActive : ''}`}
        style={{
          backgroundColor: index == currentPage ? colors[index - 1] : 'white'
        }}
        onClick={() => {
          onClickHandler(index);
        }} />)}
    </div>
  )
}

export default PageDots;