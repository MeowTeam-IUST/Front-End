import React from 'react'
import styles from './CartHeader.module.scss'
import shopping from '../../assets/shopping-cart.svg'
export default function CartHeader() {
  return (
    <div className={styles.part}>
      <img className={styles.icon} src={shopping} alt="Shopping Cart" />
    </div>
  );
}
