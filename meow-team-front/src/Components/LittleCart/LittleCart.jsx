import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';


export default function LittleCart({name, image, showPopup}) {
  return (
    <div className={styles.LittleCart} style={{backgroundImage: `url(${image})`}}>
      <div className={showPopup ? styles.GameTitlePopupOpen : styles.GameTitle}>
        <div className={styles.GameTitleText}>{name}</div>
        <div className={styles.under}>
          <div className={styles.underText}>یک چیز رندوم</div>
            <SmallBuyButton/>
          </div>
      </div>
    </div>
  )
}

