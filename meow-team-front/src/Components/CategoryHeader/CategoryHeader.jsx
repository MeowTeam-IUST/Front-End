import React from 'react'
import styles from './CategoryHeader.module.scss'


export default function CategoryHeader({icon, title}) {
  return (
    <div>
        <div className={styles.CategoryHeader}>
          <img className={styles.icon} src={icon} alt="" />
          <div className={styles.CategoryTitle}>{title}</div>
        </div>
    </div>
  )
}
