import React from 'react'
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader'
import CartHeader from '../../Components/CartHeader/CartHeader'
import SearchHeader from '../../Components/SearchHeader/SearchHeader'
import styles from './Header.module.scss'
import logo from '../../assets/logo.png'
import azhini from "../../assets/azhini.jfif"

export default function Header({Profile}) {
  return (
    <div className={styles.Header}>
        <ProfileHeader name={"محمدعلی آژینی"} image={azhini}/>
        <CartHeader/>
        <SearchHeader/>
        <img className={styles.logo} width={150} src={logo}/>
        
    </div>
  )
}
