import React from 'react'
import styles from './EditProfile.module.scss'
import azhini from '../../assets/azhini.jfif'
import EditProfileInput from '../EditProfileInput/EditProfileInput'
export default function EditProfile() {
  return (
    <div className={styles.EditProfile}>
      <div className={styles.up}>
        <img className={styles.image} src={azhini} alt="" />
        <div className={styles.button}>تغییر پروفایل</div>
      </div>
      <div className={styles.line}/>
      <div className={styles.down}>
        <div className={styles.inputs}>

          <EditProfileInput title="نام" value="آژینی"/>
          <EditProfileInput title="نام خانوادگی" value="محمدی"/>
          <EditProfileInput title="شماره تلفن" value="azhini"/>
          <EditProfileInput title="ایمیل" value="azhini"/>
          <EditProfileInput title="رمز عبور" value="azhini"/>
          <EditProfileInput title="تاریخ تولد" value="azhini"/>
        </div>
      </div>
    </div>
  )
}
