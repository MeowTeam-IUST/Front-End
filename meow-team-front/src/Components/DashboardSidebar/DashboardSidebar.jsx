import React from 'react'
import styles from './DashboardSidebar.module.scss'
import { items } from './Items'
import Exit from '../../assets/Exit.svg'
import azhini from '../../assets/azhini.jfif'
export default function DashboardSidebar() {
  return (
    <div className={styles.DashboardSidebar}>
        <div className={styles.Profile}>
          <img src={azhini} alt="" className={styles.image}/>
          <div className={styles.detail}>
              <div className={styles.name}>محمدعلی آژینی</div>
              <div className={styles.phone}>09123456789</div>
          </div>
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
