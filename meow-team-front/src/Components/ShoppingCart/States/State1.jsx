import React from 'react';
import styles from './State1.module.scss';
import CartItem from '../../CartItem/CartItem';
import Requests from '../../../API/Requests';

export default function State1({ changeState, Cart, TotalPrice ,total, setTotal , discount, setDiscount}) {
  console.log(Cart)
  // const [discount, setDiscount] = React.useState()
  // const [total, setTotal] = React.useState(TotalPrice)

  const Check = async () => {
    try {
      const res = await Requests().checkDiscount({"title" : discount});
      console.log(res.data);
      setTotal(res.data.data.totalPriceAfterDiscount)
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  }
  const handleInputChange = (event) => {
    setDiscount(event.target.value); // Update the input value as the user types
  };
  return (
    <React.Fragment>
          <div className={styles.main}>
            <div className={styles.items}>
              {Cart?.map((item, index) => (
                <CartItem key={index}  title={item.productTitle} price={item.productPrice} img={item.imageUrl} quantity={item.amount} describthion={""} id={item.productId} />
              ))}
            </div>
            <div className={styles.summary}>
              <div className={styles.price}>
                <div>قیمت کالاها: {TotalPrice}</div>
                <div className={styles.line} />
                <div>قیمت نهایی: {total? total : TotalPrice}</div>
              </div>
              <div className={styles.button} onClick={() => changeState(2)}>ادامه خرید و ثبت سفارش</div>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.down}>
            <input className={styles.discount} dir='rtl' placeholder='کد تخفیف خود را وارد کنید ...' onChange={handleInputChange}></input>
            <div className={styles.button} onClick={()=> Check()}>اعمال کد</div>
          </div>
    </React.Fragment>
  );
}
