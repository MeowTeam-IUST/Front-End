import React from 'react'
import styles from './GameList.module.scss'
import AdminLittleCart from '../LittleCart/AdminLittleCart'
import Add from "../Add/Add"
import { useState,useEffect } from 'react';
import { AddCategoryPopUp } from '../AddCategoryPopUp/AddCategoryPopUp';
import { BASE_URL } from '../../API/consts';
// import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default function AdminGameList({Products , isAdmin , id , refresh , setRefresh}) {
  const [showPopup, setShowPopup] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };
  const [itemToEdit, setItemToEdit] = useState(null);

  return (
    <div className={styles.GameList}>
      { ( Products!= null && Products.length != 0 ) ? Products.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <AdminLittleCart
              id={item.id}
              name={item.title}
              image={item.imageURL}
              showPopup={showPopup}
              description={item.subTitle}
              // open={openPopup}
              // setItemToEdit={setItemToEdit}
              // itemToEdit={itemToEdit}
              refresh={refresh} setRefresh={setRefresh}
            />
          </div>
        );
      }) : !isAdmin && <div className={styles.txt}>محصولی برای مشاهده نیست</div>
    }
    
      {isAdmin && (
        <div className={styles.item}>
          <div className={styles.AddCard} onClick={openPopup}>
            <div className={styles.Plus}>+</div>
            <div className={styles.Plus1}>اضافه کردن دسته</div>
          </div>
          {/* <Add showPopup={showPopup} setShowPopup={setShowPopup} /> */}
          <AddCategoryPopUp isOpen={isPopupOpen} onClose={closePopup} parentId={id} refresh={refresh} setRefresh={setRefresh} />
        </div>
      )}
    </div>
  );
}

