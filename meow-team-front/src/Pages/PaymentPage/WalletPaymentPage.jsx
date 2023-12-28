// PaymentPage.js

import React, { useEffect , useState} from 'react';
import Requests from '../../API/Requests';
import { WaveTopBottomLoading } from 'react-loadingg';
import styles from './PaymentPage.module.scss';

export default function WalletPaymentPage() {
  let query = new URLSearchParams(window.location.search);
  console.log(query.get("Authority"));
  console.log(query.get("Status"));
  const [isSucces, setIsSucces] = useState('');
  const waiting = () => {
    return(
      <>
        <p className={styles.wait}>لطفا منتظر بمانید</p>
        <WaveTopBottomLoading size="large" color="#E52A49" />
      </>
    )
  }
  const succes = () => {
    return(
      <>
        <p className={styles.wait}>پرداخت با موفقیت انجام شد</p>
        {/* <WaveTopBottomLoading size="large" color="#E52A49" /> */}
      </>
    )
  }
  const fail = () => {
    return(
      <>
        <p className={styles.wait}>پرداخت با خطا مواجه شد</p>
        {/* <WaveTopBottomLoading size="large" color="#E52A49" /> */}
      </>
    )
  }
  const payment = async () => {
    console.log({authority: query.get("Authority"), status: query.get("Status")})
    const res = await Requests().callbackWallet({"Authority": query.get("Authority"), "Status": query.get("Status")});
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
