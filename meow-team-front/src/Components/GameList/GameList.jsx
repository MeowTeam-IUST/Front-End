import React from 'react'
import styles from './GameList.module.scss'
import LittleCart from '../LittleCart/LittleCart'
import Add from "../Add/Add"
import { useState,useEffect } from 'react';
import { AddCategoryPopUp } from '../AddCategoryPopUp/AddCategoryPopUp';

// import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default function GameList({Products , isAdmin , id}) {
  const [showPopup, setShowPopup] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };
  

  return (
    <div className={styles.GameList}>
      { Products != undefined && Products.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <LittleCart
              id={item.id}
              name={item.title}
              image={item.imageURL}
              showPopup={showPopup}
              description={item.description}
            />
          </div>
        );
      })}
      {isAdmin && (
        <div className={styles.item}>
          <div className={styles.AddCard} onClick={openPopup}>
            <div className={styles.Plus}>+</div>
            <div className={styles.Plus1}>اضافه کردن دسته</div>
          </div>
          {/* <Add showPopup={showPopup} setShowPopup={setShowPopup} /> */}
          <AddCategoryPopUp isOpen={isPopupOpen} onClose={closePopup} id={id} />
        </div>
      )}
    </div>
  );
}

