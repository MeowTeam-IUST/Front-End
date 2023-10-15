import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';

export default function LittleCart() {
  return (
    <div className={styles.LittleCart}>
      <div className={styles.GameTitle}>
        <div className={styles.TitleText}>{name}</div>
        <SmallBuyButton/>
      </div>
    </div>
  )
}
