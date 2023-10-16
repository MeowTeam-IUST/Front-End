import React from 'react'
import styles from './Footer.module.scss'
import footer from '../../assets/footer.png'
import support from  '../../assets/support.svg'
export default function Footer() {
  return (
    <>
    <div className={styles.Footer}>
        <div className={styles.Text}>هفت روز هفته 24 ساعت شبانه روز آماده پاسخگویی</div>
        <img width={230} height={100} src={footer} alt="" />
        {/* <img className={styles.support} src={support} alt="" /> */}
        <div className={styles.Text}>ارتباط با ما : ۰۲۱۴۴۳۲۲۵۹۵       OpexShop@gmail.com</div>
    </div >
    </>
  )
}
