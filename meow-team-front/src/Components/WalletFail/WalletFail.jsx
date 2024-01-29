import React from 'react'
import styles from "./WalletFail.module.scss";



export default function WalletFail() {
  const HandleClick = () => {
    window.location.href = "/dashboard/:wallet";
  };
  return (
    <div className={styles.BackAll}>
      موجودی حساب شما کافی نیست!
      <button className={styles.backButton} onClick={() => HandleClick()}>
        افزایش موجودی کیف پول
      </button>
    </div>
  );
}
