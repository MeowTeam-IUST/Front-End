import React from 'react'
import styles from './EditProfile.module.scss'
import azhini from '../../assets/azhini.jfif'
import EditProfileInput from '../EditProfileInput/EditProfileInput'
import { useSelector, useDispatch } from "react-redux";
import { SetUser } from '../../Slices/UserSlice.js';

export function EditProfile() {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state

  return (
    <div className={styles.EditProfile}>
      <div className={styles.up}>
        <img className={styles.image} src={azhini} alt="" />
        <div className={styles.button}>تغییر پروفایل</div>
      </div>
      <div className={styles.line}/>
      <div className={styles.down}>
        <div className={styles.inputs}>

          <EditProfileInput title="نام" value={state.firstName} type={"firstName"}/>
          <EditProfileInput title="نام خانوادگی" value={state.lastName} type={"lastName"}/>
          <EditProfileInput title="شماره تلفن" value={state.phoneNumber} type={"phoneNumber"}/>
          <EditProfileInput title="ایمیل" value={state.email} type={"email"}/>
          <EditProfileInput title="رمز عبور" value="******" type={"password"}/>
          <EditProfileInput title="تاریخ تولد" value={state.birthDate} type={"birthDate"}/>
        </div>
      </div>
    </div>
  )
}
