import React from 'react'
import styles from './State1.module.scss'
import CartItem from '../../CartItem/CartItem'
import image1 from '../../../assets/4.jfif'
export default function State1({changeState}) {

  return (
    <>
    <div className={styles.line}/>
    <div className={styles.main}>
        <div className={styles.items}>
            <CartItem title={"80 کریستال گنشین ایمپکت"} price={"49000 تومان"} img={image1} quantity= {1} describthion={"هیچی"}/>
            <CartItem title={"80 کریستال گنشین ایمپکت"} price={"49000 تومان"} img={image1} quantity= {1} describthion={"هیچی"}/>
        </div>
        <div className={styles.summary}>
        <div className={styles.price}>
            <div>قیمت کالاها:</div>
            <div className={styles.line}/>
            <div>قیمت نهایی:</div>
        </div>
        <div className={styles.button} onClick={()=>changeState(2)}>ادامه خرید و ثبت سفارش</div>
        </div>
    </div>
    <div className={styles.line}/>
    <div className={styles.down}>
        <div className={styles.discount} dir='rtl' >کد تخفیف خود را وارد کنید ...</div>
        <div className={styles.button}>اعمال کد</div>
    </div>

    </>
  )
}
