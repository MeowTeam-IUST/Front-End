import React from 'react'
import styles from './ShoppingCart.module.scss'
import progress from '../../assets/progress.png'
import line from '../../assets/line.png'

export default function ShoppingCart() {
  return (
    <>
        <div className={styles.progressbar}>
          <img width={70} src={progress} alt="" />
          <img width={70} src={line} alt="" />
          <img width={70} src={progress} alt="" />
          <img width={70} src={line} alt="" />
          <img width={70} src={progress} alt="" />
        </div>
    </>
  )
}
