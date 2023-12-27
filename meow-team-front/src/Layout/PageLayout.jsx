import React from 'react'
import styles from './PageLayout.module.scss'
import Footer from '../Components/Footer/Footer'
import {Header} from '../Components/Header/Header';
import CategoryItem from '../Components/CategoryItem/CategoryItem';
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader';
import bars from "../assets/bars.svg";
import { useSelector, useDispatch } from "react-redux";
import { DeleteUser } from '../Slices/UserSlice.js';

export default function PageLayout ({ children }) {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state

  const Categorys = [
    "کالاف دیوتی موبایل",
    "گنشین ایمپکت",
    "کلش آف کلنز",
    "محصولات فیزیکی",
    "ایپکس لجندز",
  ];

  return (
    <div className={styles.PageLayout} dir="rtl">
      <div className={styles.HeadContainer}>
        <div className={state.isAdmin? styles.Head : styles.x}>
          {
            state.isAdmin && 
            <div className={styles.admin}>
              شما ادمین هستید، برای دسترسی به پنل ادمین کلیک کنید.
              <div className={styles.adminButton} onClick={()=>window.location.href = '/AdminPanel'}>پنل ادمین</div>
            </div>
          }
          <Header />
          <div className={styles.Category}>
            <CategoryHeader icon={bars} title={"دسته‌بندی محصولات"} />
            <div className={styles.CategoryItems}>
              {Categorys.map((item, index) => {
                return <CategoryItem key={index} title={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
