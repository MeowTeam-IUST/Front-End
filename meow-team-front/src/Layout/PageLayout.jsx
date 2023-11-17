import React from 'react'
import styles from './PageLayout.module.scss'
import Footer from '../Components/Footer/Footer'
import {Header} from '../Components/Header/Header';

export default function PageLayout ({ children }) {

  return (
    <div className={styles.PageLayout} dir='rtl'>
      <div className={styles.container}>
        <Header/>
        {children}
      </div>
      <Footer/>
    </div>
  );
};
