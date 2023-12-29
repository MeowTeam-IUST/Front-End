import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { BASE_URL } from '../../API/consts';


export default function AdminLittleCart({id , name, image, showPopup , description ,  open, setItemToEdit, itemToEdit}) {
  // console.log(image)
  const navigate = useNavigate();
  const HandleClick = () => {
    setItemToEdit(id)
    console.log(itemToEdit)
    open()
  };

  return (
    <div
      className={styles.LittleCart}
      style={{ backgroundImage: `url(${BASE_URL + "/" + image})` }}
      // onClick={() => navigate("/product?id=" + id)}
      onClick={() => HandleClick()}
    >
      <div className={showPopup ? styles.GameTitlePopupOpen : styles.GameTitle}>
        <div className={styles.GameTitleText}>{name}</div>
        <div className={styles.under}>
          <div className={styles.underText}>{description}</div>
          <SmallBuyButton admin={true} />
        </div>
      </div>
    </div>
  );
}

