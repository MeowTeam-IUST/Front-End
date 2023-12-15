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


export default function LittleCart({id , name, image, showPopup , description}) {

  const navigate = useNavigate();
  const HandleClick = () => {
    window.location.href = "/Product/"+id;
  };

  return (
    <div
      className={styles.LittleCart}
      style={{ backgroundImage: `url(${image})` }}
      // onClick={() => navigate("/product?id=" + id)}
      onClick={() => HandleClick()}
    >
      <div className={showPopup ? styles.GameTitlePopupOpen : styles.GameTitle}>
        <div className={styles.GameTitleText}>{name}</div>
        <div className={styles.under}>
          <div className={styles.underText}>{description}</div>
          <SmallBuyButton />
        </div>
      </div>
    </div>
  );
}

