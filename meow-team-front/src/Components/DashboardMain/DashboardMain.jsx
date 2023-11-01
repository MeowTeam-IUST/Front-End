import React from 'react'
import styles from './DashboardMain.module.scss'
import EditProfile from '../EditProfile/EditProfile'
export default function DashboardMain() {
  return (
    <div className={styles.MainContent}>
        <EditProfile />
    </div>
  )
}
