import React from "react";
import styles from "./Wallet.module.scss";
import { useState, useEffect } from "react";
import Requests from "../../API/Requests";
import { format } from "date-fns";


export function Wallet () {

    const [walletAmount, setWalletAmount] = useState(0)
    const [chargeAmount , setChargeAmount] = useState() 
    const [transactions , setTransactions] = useState([]) 
    
    const getWalletOnLoad = async (event) => {
      try {
        const res = await Requests().getWallet();
        // console.log(res.data.data.amount);
        setWalletAmount(res.data.data.amount)
        setTransactions(res.data.data.transactions)
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
              placeholder="مثال : 14000"
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
            {transactions.map((item) => {
              // Convert the date string to a JavaScript Date object
              let date = new Date(item.date);
              let formattedDate = format(date, "yyyy/MM/dd kk:mm:ss");

              let status = "خرید"
              if (item.type == 0) {
                status = "شارژ";
              }
              
              return (
                <div className={styles.WalletHistoryItem} key={item.id}>
                  <p className={styles.WalletHistoryItemAmount}>
                    {item.amount}
                  </p>
                  <p className={styles.WalletHistoryItemCause}>{status}</p>
                  <p className={styles.WalletHistoryItemDate}>
                    {formattedDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}