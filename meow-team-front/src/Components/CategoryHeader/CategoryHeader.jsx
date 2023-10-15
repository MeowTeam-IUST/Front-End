import React from 'react'

export default function CategoryHeader() {
  return (
    <div>
        <div className={styles.CategoryHeader}>
          <img className={styles.icon} src={bars} alt="" />
          <div className={styles.CategoryTitle}>دسته‌بندی محصولات</div>
        </div>
    </div>
  )
}
