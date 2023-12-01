import React from 'react'
import styles from './CartHeader.module.scss'
import shopping from '../../assets/shopping-cart.svg'
export default function CartHeader() {
  const HandleClick = () => {
    window.location.href = '/dashboard/:shoppingcart'
  }
  return (
    <div className={styles.part} onClick={()=> HandleClick()}>
      <img className={styles.icon} src={shopping} alt="Shopping Cart" />
    </div>
  );
}
