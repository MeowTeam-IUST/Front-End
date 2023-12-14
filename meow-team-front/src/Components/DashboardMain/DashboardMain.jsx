import React from 'react'
import styles from './DashboardMain.module.scss'
import {EditProfile} from '../EditProfile/EditProfile'
import { useSelector, useDispatch } from "react-redux";
import { SetDashboard } from '../../Slices/StateSlice';

export default function DashboardMain({children , setChoosenItem}) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.State); // Access the "User" slice of the state
  return (
    <div className={styles.MainContent}>
        {
          !layout.dashboardSidebar &&
          <button onClick={()=>setChoosenItem(-1)}> بازگشت</button>
        }
        {children}
    </div>
  )
}
