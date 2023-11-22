import React from 'react'
import styles from './PageLayout.module.scss'
import Footer from '../Components/Footer/Footer'
import {Header} from '../Components/Header/Header';
import CategoryItem from '../Components/CategoryItem/CategoryItem';
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader';
import bars from "../assets/bars.svg";

export default function PageLayout ({ children }) {
  const Categorys = [
    "کالاف دیوتی موبایل",
    "گنشین ایمپکت",
    "کلش آف کلنز",
    "محصولات فیزیکی",
    "ایپکس لجندز",
  ];

  return (
    <div className={styles.PageLayout} dir="rtl">
      <div className={styles.container}>
        <Header />
        <div className={styles.Category}>
          <CategoryHeader icon={bars} title={"دسته‌بندی محصولات"} />
          <div className={styles.CategoryItems}>
            {Categorys.map((item, index) => {
              return <CategoryItem key={index} title={item} />;
            })}
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </div>
  );
};
