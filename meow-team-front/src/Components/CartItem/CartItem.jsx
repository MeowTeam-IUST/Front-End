import React from 'react'
import styles from './CartItem.module.scss'
import plus from '../../assets/+.svg'
import negetive from '../../assets/-.svg'
export default function CartItem({title, price, img, quantity , describthion }) {
  const HandleChange = (count) => {
    
  }
  return (
    <div className={styles.CartItem}>
      <div className={styles.CartItem__img} style={{backgroundImage: `url(${img})`}}>
      </div>
      <div className={styles.CartItem__info}>
        <div className={styles.info}>
          <div className={styles.text1}>{title}</div>
          <div>{describthion}</div>
          <div>قیمت: {price}</div>
        </div>
        <div className={styles.quantity}>
          <div>تعداد: </div>
          <div className={styles.count}>
              <img src={plus} alt="" className={styles.icon} onClick={() => HandleChange(1)} />
              <div>{quantity}</div>
              <img src={negetive} alt="" className={styles.icon} onClick={() => HandleChange(-1)} />
          </div>
        </div>
      </div>

    </div>
  )
}
