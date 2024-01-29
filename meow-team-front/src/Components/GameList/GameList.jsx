import React from 'react'
import styles from './GameList.module.scss'
import LittleCart from '../LittleCart/LittleCart'
import Add from "../Add/Add"
import { useState,useEffect } from 'react';
import { AddCategoryPopUp } from '../AddCategoryPopUp/AddCategoryPopUp';
import { BASE_URL } from '../../API/consts';
// import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default function GameList({Products , id }) {
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
      { ( Products!== null && Products.length != 0 ) ? Products.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <LittleCart
              id={item.id}
              name={item.title}
              image={item.imageURL}
              showPopup={showPopup}
              description={item.subTitle
              }
            />
          </div>
        );
      }) : <div className={styles.txt}>محصولی برای مشاهده نیست</div>
    }
    </div>
  );
}

