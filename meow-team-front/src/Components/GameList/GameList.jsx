import React from 'react'
import styles from './GameList.module.scss'
import LittleCart from '../LittleCart/LittleCart'
import Add from "../Add/Add"
import { useState,useEffect } from 'react';
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export default function GameList({Products , isAdmin}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
      <div className={styles.GameList}>
      {isAdmin && 
        <div className={styles.item}>
          <Add showPopup={showPopup} setShowPopup={setShowPopup} />
        </div>
      }
      {Products.map((item,index) => {
        return (
          <div className={styles.item} key={index}>
            <LittleCart name={item.title} image={item.imageURL} showPopup={showPopup} description={item.description} />
          </div>
        )
      })}
    </div>
  )
}

