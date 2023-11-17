import React from 'react'
import styles from './DashboardMain.module.scss'
import {EditProfile} from '../EditProfile/EditProfile'
export default function DashboardMain({children}) {
  return (
    <div className={styles.MainContent}>
        {children}
    </div>
  )
}
