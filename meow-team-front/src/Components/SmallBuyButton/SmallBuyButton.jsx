import React from 'react'
import styles from './SmallBuyButton.module.scss'


export default function BuyButton({admin , open }) {
  const handle = () => {
    if (admin == true)
      open()
  }
  return (
    <div className={styles.Button} onClick={()=> handle()}>
      {
        admin? "ویرایش" : "خــرید"
      }
    </div>
  )
}
