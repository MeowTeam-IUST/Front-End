import React from 'react';
import styles from './State1.module.scss';
import CartItem from '../../CartItem/CartItem';
import Requests from '../../../API/Requests';

export default function State1({ changeState, Cart, TotalPrice }) {
  return (
    <React.Fragment>
      <div className={styles.line} />
      <div className={styles.main}>
        <div className={styles.items}>
          {Cart.map((item, index) => (
            <CartItem key={index} title={item.productTitle} price={item.productPrice} img={item.imageUrl} quantity={item.amount} describthion={""} />
          ))}
        </div>
        <div className={styles.summary}>
          <div className={styles.price}>
            <div>قیمت کالاها: {TotalPrice}</div>
            <div className={styles.line} />
            <div>قیمت نهایی: {TotalPrice}</div>
          </div>
          <div className={styles.button} onClick={() => changeState(2)}>ادامه خرید و ثبت سفارش</div>
        </div>
      </div>
      <div className={styles.line} />
      <div className={styles.down}>
        <div className={styles.discount} dir='rtl'>کد تخفیف خود را وارد کنید ...</div>
        <div className={styles.button}>اعمال کد</div>
      </div>
    </React.Fragment>
  );
}
