import React from 'react'
import styles from './GameList.module.scss'
import LittleCart from '../LittleCart/LittleCart'

export default function GameList({Products}) {
  return (
    <div className={styles.GameList}>
        {Products.map((item,index) => {
            return (
              <div className={styles.item}>
                <LittleCart key={index} name={item.name}  />
              </div>
            )
          })}
    </div>
  )
}
