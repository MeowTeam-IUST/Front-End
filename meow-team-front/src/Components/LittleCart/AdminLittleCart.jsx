import React from 'react'
import styles from './LittleCart.module.scss'
import SmallBuyButton from '../SmallBuyButton/SmallBuyButton';
import { useDispatch,useSelector } from 'react-redux';
import { setEditPopUp } from '../../Slices/StateSlice';
import { useState , useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,

} from "react-router-dom";
import { EditCategoryPopUp } from "../AddCategoryPopUp/EditCategoryPopUp";


import { BASE_URL } from '../../API/consts';
import Popup from '../Popup/Popup';
import { AddProductPopUp } from '../AddProductPopUp/AddProductPopUp';


export default function AdminLittleCart({id , name, image, showPopup , description ,  open, setItemToEdit, itemToEdit, refresh,setRefresh }) {
  const layout = useSelector((state) => state.State); // Access the "User" slice of the state
  const dispatch = useDispatch();
  // console.log(image)
  const navigate = useNavigate();
  const [item , setItem] = useState();
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setItem(id);
    console.log(id, item);
    setIsPopupOpen(true);

    // console.log("hi")
    // dispatch(setEditPopUp({editPopUp: true}))
  };
  const closePopup = () => {
    // console.log("hi");
    setIsPopupOpen(false);
    // dispatch(setEditPopUp({editPopUp: false}))

  };
  const [isPopupOpenadd, setPopupOpenadd] = useState(false);
  const openPopupadd = () => {
    setItem(id);
    console.log(id, item);
    setPopupOpenadd(true);
  };
   const closePopupadd = () => {
     setPopupOpenadd(false);
   };

  

  return (
    <div
      className={styles.LittleCart}
      style={{ backgroundImage: `url(${BASE_URL + "/" + image})` }}
      // onClick={() => navigate("/product?id=" + id)}
      // onClick={() => openPopup()}
    >
      <div className={showPopup ? styles.GameTitlePopupOpen : styles.GameTitle}>
        <div className={styles.GameTitleText}  onClick={openPopupadd}>{name}</div>
        <div className={styles.under}>
          <div className={styles.underText}>{description}</div>
          <SmallBuyButton admin={true} open={openPopup} />
        </div>
      </div>

      {isPopupOpen && (<EditCategoryPopUp
        isOpen={isPopupOpen}
        onClose={closePopup}
        id={item}
        refresh={refresh}
        setRefresh={setRefresh}
      />)}
      {isPopupOpenadd && (<AddProductPopUp
        isOpen={isPopupOpenadd}
        onClose={closePopupadd}
        id = {item}
      />)}
    </div>
  );
}

