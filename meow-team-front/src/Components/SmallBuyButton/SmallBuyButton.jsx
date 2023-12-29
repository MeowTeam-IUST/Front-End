import React from 'react'
import styles from './SmallBuyButton.module.scss'


export default function BuyButton({admin}) {
  return (
    <div className={styles.Button}>
      {
        admin? "ویرایش" : "خــرید"
      }
    </div>
  )
}
