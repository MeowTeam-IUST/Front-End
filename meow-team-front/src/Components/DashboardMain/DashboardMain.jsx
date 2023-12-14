import React from 'react'
import styles from './DashboardMain.module.scss'
import {EditProfile} from '../EditProfile/EditProfile'
import { useSelector, useDispatch } from "react-redux";
import { SetDashboard } from '../../Slices/StateSlice';
import arrowright from '../../assets/arrowright.svg'
export default function DashboardMain({children , setChoosenItem}) {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.State); // Access the "User" slice of the state
  return (
    <div className={styles.MainContent}>
        {
          !layout.dashboardSidebar &&
          <div className={styles.back}  onClick={()=>setChoosenItem(-1)}>
            <img src={arrowright} width={40}/>
            <div>بازگشت</div>
          </div>
        }
        {children}
    </div>
  )
}
