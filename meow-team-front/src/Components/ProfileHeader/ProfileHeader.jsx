import React, { useEffect } from 'react'
import styles from './ProfileHeader.module.scss'


export function ProfileHeader({name, image}) {
  const [isAuth, setIsAuth] = React.useState(false)
  useEffect(() => {
    localStorage.getItem('token') ? setIsAuth(true) : setIsAuth(false);

    }, [])  
  const HandleClick = () => {
    window.location.href = '/login'
  }
  const LogOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/'
  }
  return (
    <div className={styles.profile}>
      {isAuth ? (
        <>
          <img className={styles.image} src={image} alt="" />
          <div className={styles.name}>{name}</div>
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
