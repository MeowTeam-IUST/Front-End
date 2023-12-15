import React, { useState } from "react";
import axios from "axios";
import styles from "./AddCategoryPopUp.module.scss";
import Draggable from "react-draggable";

export const AddCategoryPopUp = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    console.log("Submitted value:", inputValue);
    onSubmit(inputValue);
    onClose();
  };

  

  return (
    <div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popUp_top}>
              <div className={styles.popUp_Title}>اطلاعات کارت</div>
              <div className={styles.popUp_top_form}>
                <div className={styles.titleSection}>
                  <p className={styles.title}>نام کارت</p>
                  <input type="text" className={styles.TitleInput} />
                </div>
                <div className={styles.subTitleSection}>
                  <p className={styles.subTitle}>زیرنویس کارت</p>
                  <input type="text" className={styles.SubtitleInput} />
                </div>
              </div>
            </div>

            <div className={styles.popUp_bottom}>
              
            </div>
            <div className={styles.ButtonSection}>
              <button onClick={handleSubmit} className={styles.SubmitButton}>ذخیره</button>
              <button onClick={onClose} className={styles.CancelButton}>انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
