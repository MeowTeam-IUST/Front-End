import React from "react";
import styles from "./Wallet.module.scss";
import { useState, useEffect } from "react";
import Requests from "../../API/Requests";


export function Wallet () {

    const [walletAmount, setWalletAmount] = useState(0)
    const [chargeAmount , setChargeAmount] = useState(0) 
    
    const getWalletOnLoad = async (event) => {
      try {
        const res = await Requests().getWallet();
        // console.log(res.data.data.amount);
        setWalletAmount(res.data.data.amount)
      } catch (error) {
        console.error("Error getting wallet:", error);
      }
    }
    const submit = async () => {
      try {
        const res = await Requests().chargeWallet({
          amount: chargeAmount,
        });
        console.log(res.data);
        window.location.href = res.data.data;
      } catch (error) {
        console.error("Error submitting payment:", error);
      }
    };

    const handleChargeAmountChange = (event) => {
      setChargeAmount(event.target.value);
    };

     useEffect(() => {
      getWalletOnLoad()
     } ,[] )
    

    return (
      <div className={styles.WalletAll}>
        <div className={styles.WalletTop}>
          <div className={styles.WalletAmountSection}>
            <div className={styles.WalletAmountText}>
              <p>موجودی کیف پول شما</p>
            </div>
            <div className={styles.WalletAmount}>
              <p>{walletAmount} تومان</p>
            </div>
          </div>
          <div className={styles.AddToWalletSection}>
            <input
              className={styles.AddToWalletInput}
              type="number"
              value={chargeAmount}
              onChange={handleChargeAmountChange}
            />
            <button
              className={styles.AddToWalletButton}
              onClick={() => submit()}
            >
              افزایش موجودی
            </button>
          </div>
        </div>
        <div className={styles.WalletBottom}>
          <h2>سوابق تراکنش های شما</h2>
          <div className={styles.WalletHistoryList}>
            <div className={styles.WalletHistoryItem}>
              <p className={styles.WalletHistoryItemAmount}>+ ۲۴۰۰۰ تومان</p>
              <p className={styles.WalletHistoryItemCause}>شارژ کیف پول</p>
              <p className={styles.WalletHistoryItemDate}>۱۴۰۲/۷/۱۲</p>
            </div>

            <div className={styles.WalletHistoryItem}>
              <p className={styles.WalletHistoryItemAmount}>+ ۲۴۰۰۰ تومان</p>
              <p className={styles.WalletHistoryItemCause}>شارژ کیف پول</p>
              <p className={styles.WalletHistoryItemDate}>۱۴۰۲/۷/۱۲</p>
            </div>

            <div className={styles.WalletHistoryItem}>
              <p className={styles.WalletHistoryItemAmount}>+ ۲۴۰۰۰ تومان</p>
              <p className={styles.WalletHistoryItemCause}>شارژ کیف پول</p>
              <p className={styles.WalletHistoryItemDate}>۱۴۰۲/۷/۱۲</p>
            </div>
          </div>
        </div>
      </div>
    );
}