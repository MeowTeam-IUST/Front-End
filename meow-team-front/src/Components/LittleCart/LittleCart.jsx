import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';

export default function LittleCart({name,detail}) {
  return (
    <div className={styles.LittleCart}>
      <div className={styles.GameTitle}>
        <div className={styles.GameTitleText}>{name}</div>
        <div className={styles.under}>
          <div className={styles.underText}>یک چیز رندوم</div>
          <SmallBuyButton/>
        </div>
      </div>
    </div>
  )
}
