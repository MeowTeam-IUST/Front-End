import React from "react";
import styles from "./Wallet.module.scss";
import { useState, useEffect } from "react";

export function Wallet () {

    const [walletAmount, setWalletAmount] = useState(0)

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
            <input className={styles.AddToWalletInput} />
            <button className={styles.AddToWalletButton}>افزایش موجودی</button>
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