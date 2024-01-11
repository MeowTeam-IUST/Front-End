// PaymentPage.js

import React, { useEffect , useState} from 'react';
import Requests from '../../API/Requests';
// import { WaveTopBottomLoading } from 'react-loadingg';
import styles from './PaymentPage.module.scss';

export default function PaymentPage() {
  let query = new URLSearchParams(window.location.search);
  console.log(query.get("Authority"));
  console.log(query.get("Status"));
  const [isSucces, setIsSucces] = useState('');
  const waiting = () => {
    return(
      <>
        <p className={styles.wait}>لطفا منتظر بمانید</p>
        {/* <WaveTopBottomLoading size="large" color="#E52A49" /> */}
      </>
    )
  }
  const succes = () => {
    return(
      <>
        <p className={styles.wait}>پرداخت با موفقیت انجام شد</p>
        <div onClick={()=> window.location.href = "/t"}>بازگشت به سایت</div>

        {/* <WaveTopBottomLoading size="large" color="#E52A49" /> */}
      </>
    )
  }
  const fail = () => {
    return(
      <>
        <p className={styles.wait}>پرداخت با خطا مواجه شد</p>
        <div onClick={()=> window.location.href = "/dashboard/:shoppingcart"}>بازگشت به سبد خرید</div>
        {/* <WaveTopBottomLoading size="large" color="#E52A49" /> */}
      </>
    )
  }
  const payment = async () => {
    console.log({authority: query.get("Authority"), status: query.get("Status")})
    const res = await Requests().callbackBuy({"Authority": query.get("Authority"), "Status": query.get("Status")});
    if (res.data.isSuccess == true)
      setIsSucces(true);
    else
      setIsSucces(false);
    
    console.log(res.data);
  }

  useEffect(() => {
    payment();
  }, []);

  return (
    <div className={styles.loading}>
      {isSucces === '' ? waiting() : isSucces==true ? succes() : fail()}
    </div>
  );
}
