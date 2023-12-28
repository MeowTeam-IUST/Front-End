import React, {useEffect, useState} from 'react'
import styles from './PageLayout.module.scss'
import Footer from '../Components/Footer/Footer'
import {Header} from '../Components/Header/Header';
import CategoryItem from '../Components/CategoryItem/CategoryItem';
import CategoryHeader from '../Components/CategoryHeader/CategoryHeader';
import bars from "../assets/bars.svg";
import { useSelector, useDispatch } from "react-redux";
import { DeleteUser } from '../Slices/UserSlice.js';
import Requests from '../API/Requests';
export default function PageLayout ({ children }) {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state

  const Categorys = [
    "کالاف دیوتی موبایل",
    "گنشین ایمپکت",
    "کلش آف کلنز",
    "محصولات فیزیکی",
    "ایپکس لجندز",
  ];
  const [allCategories , setAllCategories ] = useState([])


  const fetchCategories = async () => {
    try {
      const res = await Requests().getAllCategories();
      // console.log(res.data.data.amount);
      console.log("All categories : ",res)
      setAllCategories(res)
    } catch (error) {
      console.error("Error getting categories:", error);
    }
  }; 
  useEffect(() => {
    fetchCategories()
  }, []);

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
              {allCategories.map((item, index) => {
                return <CategoryItem key={index} title={item.title} />;
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
