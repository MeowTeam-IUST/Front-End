import React from 'react'
import styles from './State3.module.scss'
import call from '../../../assets/call.svg'
import telegram from '../../../assets/telegram.svg'
export default function State3({changeState}) {
  return (
    <>
      <div className={styles.line}/>
      <div className={styles.main}>
        <div className={styles.box}>
          <div>سفارش شما با شماره پیگیری</div>
          <div className={styles.button}>05344</div>
          <div>در دست انجام قرار گرفت!</div>
        </div>
        <div className={styles.box1}>
          <div>می‌توانید با استفاده از دکمه روبرو از آخرین وضعیت سفارش خود با خبر بشوید</div>
          <div className={styles.button} onClick={()=>changeState(1)}>پیگیری سفارش</div>
        </div>
        <div className={styles.info}>
          <div>
          در صورت وجود هر گونه مشکل یا ابهام می‌توانید با روش های زیر با ما در ارتباط باشید.
          </div>
          <div className={styles.connections}>
              <div className={styles.button}>
                <div>OpexShop_Admin</div>
                <img src={telegram} alt="" />
              </div>
              <div className={styles.button}>
                <div>09123456789</div>
                <img src={call} alt="" />
              </div>
          </div>
        </div>
      </div>


    </>

  )
}
