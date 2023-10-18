import React from 'react'
import styles from './ProfileHeader.module.scss'

export default function ProfileHeader({name, image}) {
  return (
    <div className={styles.profile}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.name}>{name}</div>
    </div>
  )
}
