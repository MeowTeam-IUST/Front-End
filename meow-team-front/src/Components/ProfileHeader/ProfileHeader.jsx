import React, { useEffect } from 'react'
import styles from './ProfileHeader.module.scss'
import { useSelector, useDispatch } from "react-redux";
import { DeleteUser } from '../../Slices/UserSlice.js';

export function ProfileHeader({name, image}) {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = React.useState(false)
  useEffect(() => {
    localStorage.getItem('token') ? setIsAuth(true) : setIsAuth(false);

    }, [])  

  const nameToShow = state.firstName != "Null" ? state.lastName != "Null"?  state.firstName + " " +  state.lastName : state.firstName : state.phoneNumber ;
  const HandleClick = () => {
    window.location.href = '/login'
  }
  const LogOut = () => {
    localStorage.removeItem('token');
    dispatch(DeleteUser())
    window.location.href = '/'
  }
  const navigatDashboard = () => {
    window.location.href = '/dashboard'
  }
  return (
    <div className={styles.profile}>
      {isAuth ? (
        <>
          <img className={styles.image} src={state.image} alt="" />
          <div className={styles.name} onClick={() => navigatDashboard()}>{nameToShow}</div>
          <button className={styles.exitButton} onClick={LogOut}>
            خروج
          </button>
        </>
      ) : (
        <div className={styles.name} onClick={() => HandleClick()}>
          ورود یا ثبت‌نام
        </div>
      )}
    </div>
  );
}
