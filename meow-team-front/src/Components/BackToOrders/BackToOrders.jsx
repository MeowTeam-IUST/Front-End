import React from 'react'
import styles from "./BackToOrders.module.scss";



export default function BackToOrders() {

    const HandleClick = () => {
      window.location.href = "/dashboard/:history";
    };
  return (
    <div className={styles.BackAll}>
      پرداخت شما با موفقیت انجام شد!
      <button className={styles.backButton} onClick={() => HandleClick()}>رفتن به سفارشات من</button>
    </div>
  )
}
