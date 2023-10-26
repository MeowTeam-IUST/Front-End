import React, { useEffect } from 'react';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import CartHeader from '../../Components/CartHeader/CartHeader';
import SearchHeader from '../../Components/SearchHeader/SearchHeader';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import azhini from "../../assets/azhini.jfif";

import { useSelector, useDispatch } from "react-redux";
import { SetUser } from '../../Slices/UserSlice.js';

export default function Header({ Profile }) {
  const state = useSelector((state) => state.User); // Access the "User" slice of the state
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleClick = () => {
    dispatch(SetUser({
      Name: "MohammadAli",
      Number: "09123456789",
      Profile: "azhini",
      Token: "123456789"
    }));
  };

  return (
    <div className={styles.Header}>
      <ProfileHeader name={state.Name || "محمدعلی آژینی"} image={azhini} />
      <CartHeader />
      <SearchHeader />
      <img className={styles.logo} width={150} src={logo} onClick={handleClick} />
    </div>
  );
}