import React from 'react'
import Styles from './AdminPanelMain.module.scss'
export default function AdminPanelMain({children}) {
  return (
    <div className={Styles.AdminPanelMain}>{children}</div>
  )
}
