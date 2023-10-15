import React from 'react'
import styles from './CategoryItem.module.scss'

export default function CategoryItem({title}) {
  return (
    <div className={styles.CategoryItem}>{title}</div>
  )
}
