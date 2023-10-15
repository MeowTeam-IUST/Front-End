import React from 'react'
import styles from './CartHeader.module.scss'
import shopping from '../../../public/shopping-cart.svg'
export default function CartHeader() {
  return (
    <div className={styles.part}>
        <img className={styles.icon} src={shopping} alt="" />
    </div>
  )
}
