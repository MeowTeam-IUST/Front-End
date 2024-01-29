import React from 'react'
import styles from './CartItem.module.scss'
import plus from '../../assets/+.svg'
import negetive from '../../assets/-.svg'
import Requests from '../../API/Requests'
import { BASE_URL } from "../../API/consts";

export default function CartItem({title, price, img, quantity , describthion , id ,refresh , setRefresh}) {
  const [RequestMessage, setRequestMessage] = React.useState('');
  const [quan , setQuan] = React.useState(quantity);
  const AddToCartReq = async () => {

    let data = {
      productId: id,
      description: describthion
    }
    const res = await Requests().addInvoiceItem(data);
    console.log(res)
    if (res.data.isSuccess) {
      console.log('success');
      setQuan(quan+1);
      setRefresh(refresh+1)
    }
    else {
      console.log(res.data.message);
      setRequestMessage(res.data.message);
    }

  }
  const DelFromCart = async () => {

    let data = {
      productId: id,
      description: describthion
    }
    const res = await Requests().deleteInvoiceItem(data);
    console.log(res)
    if (res.data.isSuccess) {
      console.log('success');
      setQuan(quan-1);
      setRefresh(refresh+1)

    }
    else {
      console.log(res.data.message);
      setRequestMessage(res.data.message);
    }

  }
  return (
    <>
    {
      quan > 0 && 
    <div className={styles.CartItem}>
      <div
        className={styles.CartItem__img}
        style={{ backgroundImage: `url(${BASE_URL + "/" + img})` }}
      ></div>
      <div className={styles.CartItem__info}>
        <div className={styles.info}>
          <div className={styles.text1}>{title}</div>
          <div>{describthion}</div>
          <div>قیمت: {price}</div>
        </div>
        <div className={styles.quantity}>
          <div>تعداد: </div>
          <div className={styles.count}>
            <img
              src={plus}
              alt=""
              className={styles.icon}
              onClick={() => AddToCartReq()}
            />
            <div>{quan}</div>
            <img
              src={negetive}
              alt=""
              className={styles.icon}
              onClick={() => DelFromCart()}
            />
          </div>
        </div>
        {RequestMessage !== "" ? (
          <div className={styles.RequestMessage}>{RequestMessage}</div>
        ) : null}
      </div>
    </div>
    }
    </>
  );
}
