import React from 'react'
import styles from './SearchHeader.module.scss'
import search from '../../assets/search.svg'

export default function SearchHeader() {
  return (
    
    <div className={styles.SearchHeader}>
        <input className={styles.input} placeholder='جستجو در اپکس شاپ'></input>
        <img className={styles.icon} src={search} alt="" />
    </div>
  )
}
