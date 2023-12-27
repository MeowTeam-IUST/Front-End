import React, { useState } from "react";
import axios from "axios";
import styles from "./AddCategoryPopUp.module.scss";
import Draggable from "react-draggable";
import { FileDrop } from "../filedrop";

export const AddCategoryPopUp = ({ isOpen, onClose }) => {
  const fileInputRef = React.createRef();
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // You can perform additional validation here if needed

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
              <div className={styles.bottom_right}>
                <div className={styles.right_text_section}>
                  <div className={styles.bottom_right_title}>
                    آپلود عکس محصول
                  </div>
                  <div className={styles.bottom_right_subTitle}>
                    از این قسمت می‌توانید برای دسته بندی محصول خود عکس بارگزاری
                    نمایید
                  </div>
                </div>

                {/* <button className={styles.uploadButton}>آپلود عکس</button> */}

                <label className={styles.uploadButton}>
                  آپلود عکس
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              <div className={styles.bottom_left}>
                {/* <FileDrop fileInputRef={fileInputRef} /> */}
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className={styles.selectedImage}
                  />
                ) : (
                  <div className={styles.imagePlaceHolder}>
                    محل قرارگیری تصویر
                  </div>
                )}
              </div>
            </div>
            <div className={styles.ButtonSection}>
              <button onClick={handleSubmit} className={styles.SubmitButton}>
                ذخیره
              </button>
              <button onClick={onClose} className={styles.CancelButton}>
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
