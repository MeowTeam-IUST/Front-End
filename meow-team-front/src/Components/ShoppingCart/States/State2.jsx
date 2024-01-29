import React, { useState } from 'react';
import styles from './State2.module.scss';
import Requests from '../../../API/Requests';
import Popup from '../../Popup/Popup';
import BackToOrders from '../../BackToOrders/BackToOrders';
import WalletFail from '../../WalletFail/WalletFail';
import bigcirclered from '../../../assets/bigcirclered.svg'
import checkicon from '../../../assets/checkicon.svg'
import emptycirclegray from '../../../assets/emptycirclegray.svg'
import smallcirclegray from '../../../assets/smallcirclegray.svg'
import emptycirclered from '../../../assets/emptycirclered.svg'
import smallcirclered from '../../../assets/smallcirclered.svg'
import redline from '../../../assets/redline.svg'
import grayline from '../../../assets/grayline.svg'

export default function State2({ changeState, Cart, TotalPrice, total, setTotal , discount, setDiscount }) {
  const [describthion, setDescribthion] = useState('');
  const [sucsessPopUp , setSucsessPopUp] = useState(0)
  const [failPopUp, setFailPopUp] = useState(0);

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
      if (res.data.isSuccess == true) {
        setSucsessPopUp(1);
      }
      if (res.data.isSuccess == false) {
        setFailPopUp(1);
      }
      
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };
  const closePopup = () => {
    setSucsessPopUp(false);
    setFailPopUp(false)
  };

  return (
    <React.Fragment>
      <div className={styles.ordersstatus}>
        <div className={styles.ordersstatusiconbox}>
            <div className={styles.iconboxfirst}>
                <img className={styles.insideiconfirst} src={checkicon} alt=""/>
                <img className={styles.outsideiconfirst} src={bigcirclered} alt=""/>
            </div>
            <img className={styles.iconredlinefirst} src={redline} alt=""/>
            <div className={styles.iconboxsecond}>
                <img className={styles.insideiconsecond} src={smallcirclered} alt=""/>
                <img className={styles.outsideiconsecond} src={emptycirclered} alt=""/>
            </div>
            <img className={styles.iconredlinesecond} src={redline} alt=""/>
            <div className={styles.iconboxthird}>
                <img className={styles.insideiconthird} src={smallcirclegray} alt=""/>
                <img className={styles.outsideiconthird} src={emptycirclegray} alt=""/>
            </div>
        </div>
        <div className={styles.ordersstatustextbox}>
            <div className={styles.ordersstatustext}>سبد خرید</div>
            <div className={styles.ordersstatustext}>تایید و پرداخت</div>
            <div className={styles.ordersstatustext}>ثبت نهایی</div>
        </div>
      </div>
      <div className={styles.line} />
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
          ))}
        </div>
        <div className={styles.box}>
          <div className={styles.item}>
            <div>قیمت نهایی:</div>
            <div>{total} تومان</div>
          </div>
        </div>
        <div className={styles.box}>
          <div>توضیحات سفارش</div>
          <div className={styles.line} />
          <textarea
            className={styles.textarea}
            rows={4}
            maxRows={4}
            placeholder="اطلاعات را اینجا وارد کنید ..."
            onChange={(e) => setDescribthion(e.target.value)}
          />
        </div>
        <div className={styles.title1}>انتخاب روش پرداخت</div>
        <div className={styles.buttons}>
          <div className={styles.button1} onClick={() => submit()}>
            <div className={styles.header}>پرداخت مستقیم</div>
            {/* <div>خرید از درگاه بانکی</div> */}
          </div>
          <div
            className={`${styles.button1} ${styles.button2}`}
            onClick={() => wallet()}
          >
            <div className={styles.header}>برداشت از کیف پول</div>
            {/* <div>موجودی 200 هزار تومان</div> */}
          </div>
        </div>
        <Popup
          isOpen={sucsessPopUp}
          onClose={closePopup}
          title={"وضعیت سفارش"}
          content={<BackToOrders />}
        />
        <Popup
          isOpen={failPopUp}
          onClose={closePopup}
          title={"وضعیت سفارش"}
          content={<WalletFail />}
        />
      </div>
    </React.Fragment>
  );
}
