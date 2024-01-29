import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AddProductPopUp.module.scss";
import Draggable from "react-draggable";
import Requests from "../../API/Requests";
import ProductsCat from "../../Pages/ProductsCat/ProductsCat";
import cross from '../../assets/cross.svg'; // Import your image

export const AddProductPopUp = ({ isOpen, onClose, id }) => {
  return (
    <div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
          <div className={styles.header}>
            <div className={styles.Title}>اضافه کردن محصول</div>
            <div className={styles.closeButton} onClick={onClose}>
              <img src={cross} alt="" />
            </div>
          </div>
        <div className={styles.popupContent}><ProductsCat id = {id}/></div>

            
          </div>
        </div>
      )}
    </div>
  );
};
