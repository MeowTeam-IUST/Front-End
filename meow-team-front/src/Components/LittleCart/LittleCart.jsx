import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';


export default function LittleCart({name, image, showPopup}) {
  console.log(showPopup) 
  return (
    <div className={styles.LittleCart} style={{backgroundImage: `url(${image})`}}>
      <div className={showPopup ? styles.GameTitlePopupOpen : styles.GameTitle}>
        <div className={styles.TitleText}>{name}</div>
        <SmallBuyButton/>
      </div>
    </div>
  )
}

