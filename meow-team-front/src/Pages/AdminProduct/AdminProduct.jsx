import React from 'react'
import { useState,useEffect } from 'react';
import styles from './AdminProduct.module.scss'
import CategoryHeader from '../../Components/CategoryHeader/CategoryHeader'
import AdminGameList from '../../Components/GameList/AdminGameList'
import gameControlle from '../../assets/game-controlle.svg'
import image1 from '../../assets/1.png'
import Requests from '../../API/Requests';
import { AddSectionPopUp } from "../../Components/AddSectionPopUp/AddSectionPopUp";

export default function AdminProduct(){
    const [showPopup, setShowPopup] = useState(false);
    const [allCategories, setAllCategories] = useState([])
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [refresh , setRefresh] = useState(false);
    const openPopup = () => {
      setPopupOpen(true);
    };
     const closePopup = () => {
       setPopupOpen(false);
     };
     const [ edit, setEdit] = useState(false)
     const fetchCategories = async () => {
       try {
         const res = await Requests().getAllCategories();
         // console.log(res.data.data.amount);
         console.log("All categories : ", res);
         setAllCategories(res);
       } catch (error) {
         console.error("Error getting categories:", error);
       }
     }; 

     useEffect(() => {
      fetchCategories()
     }, [refresh]);
     
    return (
      <div className={styles.whole} dir="rtl">
        {
          allCategories.map((category) => {
            return (
              <div className={styles.allgames}>
                <CategoryHeader
                  icon={gameControlle}
                  title={category.title}
                  id={category.id}
                  admin = {true}
                  setEdit={setEdit}
                  openPopup={openPopup}
                  refresh={refresh} setRefresh={setRefresh}
                />
                <AdminGameList Products={category.categories} isAdmin={true} id={category.id} refresh={refresh} setRefresh={setRefresh} />
              </div>
            );
          }
          )
        }
        
        <div className={styles.addcat} onClick={openPopup}>
          <div className={styles.addcat1}>اضافه کردن دسته اصلی</div>
          <div className={styles.addcatp}>+</div>
        </div>

        {/* {showPopup && (
          <div className={styles.Backdrop} onClick={() => setShowPopup(false)}>
            <div
              className={styles.Popup}
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.pcp}>
                <div className={styles.pcp1}>
                  <div className={styles.pcp11}>اطلاعات دسته</div>
                  <div className={styles.pcp12}>
                    <div className={styles.pcp121}>نام دسته</div>
                    <div className={styles.pcp122}></div>
                  </div>
                </div>

                <div className={styles.pcp2}>
                  <button className={styles.btpu}>انصراف</button>
                  <button className={styles.btpu1}>ذخیره</button>
                </div>
              </div>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )} */}

        <AddSectionPopUp isOpen={isPopupOpen} onClose={closePopup} refresh={refresh} setRefresh={setRefresh} edit={edit}  />
      </div>
    );
}