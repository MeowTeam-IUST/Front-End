import React from 'react'
import styles from './DashboardSidebar.module.scss'
import { items } from './Items'
import Exit from '../../assets/Exit.svg'
export default function DashboardSidebar() {
  return (
    <div className={styles.DashboardSidebar}>
        <div className={styles.Profile}>

        </div>
        <div className={styles.line}/>
        {items.map((item, index) => {
          return (
            <>
            <div key={index} className={styles.Item} >
              <img src={item.icon} alt="" className={styles.icon} />
              <div className={styles.Text}>
                {item.name}
              </div>
            </div>
            <div className={styles.line}/>
            </>
          )
        }
        )}
        <div className={styles.Item} >
          <img src={Exit} alt="" className={styles.icon} />
          <div className={styles.Text}>خروج</div>
        </div>
    </div>
  )
}
