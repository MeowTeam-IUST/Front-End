import React, { useState } from 'react';
import styles from './State2.module.scss';
import Requests from '../../../API/Requests';

export default function State2({ changeState, Cart, TotalPrice, total, setTotal , discount, setDiscount }) {
  const [describthion, setDescribthion] = useState('');

  const submit = async () => {
    try {
      const res = await Requests().payment({"discountTitle": discount});
      console.log(res.data);
      window.location.href = res.data.data;
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };
  const wallet = async () => {
    try {
      const res = await Requests().buyFromWallet({"discountTitle": discount});
      console.log(res.data);
      
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };

  return (
    <React.Fragment>
      {/* <div className={styles.line} /> */}
      <div className={styles.main}>
          <div className={styles.box}>
            {Cart.map((item) => (
              <div className={styles.item}>
                <div className={styles.text1}>
                  <div>x{item.amount}</div>
                  <div>{item.productTitle}</div>
                </div>
                <div>قیمت : {item.productPrice} تومان</div>
              </div>
            ))
            }
          </div>
          <div className={styles.box}>
          <div className={styles.item}>
                <div>قیمت نهایی:</div>
                <div>{total} تومان</div>
              </div>
          </div>
          <div className={styles.box}>
            <div>توضیحات سفارش</div>
            <div className={styles.line}/>
            <textarea className={styles.textarea} rows={4} maxRows={4} placeholder="اطلاعات را اینجا وارد کنید ..." onChange={(e)=> setDescribthion(e.target.value)} />
          </div>
          <div className={styles.title1} >انتخاب روش پرداخت</div>
          <div className={styles.buttons}>
            <div className={styles.button1} onClick={()=>submit()}>
              <div className={styles.header}>پرداخت مستقیم</div>
              {/* <div>خرید از درگاه بانکی</div> */}
            </div>
            <div className={`${styles.button1} ${styles.button2}`} onClick={()=>wallet()}>
              <div className={styles.header} >برداشت از کیف پول</div>
              {/* <div>موجودی 200 هزار تومان</div> */}
            </div>
          </div>
        </div>
    </React.Fragment>
  );
}
