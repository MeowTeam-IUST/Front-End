import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AddCategoryPopUp.module.scss";
import Draggable from "react-draggable";
import Requests from "../../API/Requests";

export const AddproductPopUp1 = ({ isOpen, onClose , parentId , setRefresh, refresh  }) => {
  const fileInputRef = React.createRef();
  const [TitleValue, setTitleValue] = useState("");
  const [SubTitleValue, setSubTitleValue] = useState("");
  const [Amount, setAmount] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  console.log("object")



  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    // You can perform additional validation here if needed

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubTitleChange = (e) => {
    setSubTitleValue(e.target.value);
  };
  const formData = new FormData();

  const handleSubmit = async (event) => {
    // Add your submit logic here
    console.log(TitleValue,selectedImage,SubTitleValue)
    formData.append('Title', TitleValue);
    formData.append('َAmount', Amount);

    formData.append('Picture', image);

    formData.append('Price', SubTitleValue);
    formData.append('IsActive', true);
    formData.append('CategoryID', parentId);
    try {
      const res = await Requests().addProduct(formData);
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting category:", error);
    }

    console.log("Submitted value:", TitleValue);
    setRefresh(!refresh)
    onClose();
  };

  

  return (
    <div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popUp_top}>
              <div className={styles.popUp_Title}>اطلاعات محصول</div>
              <div className={styles.popUp_top_form}>
                <div className={styles.titleSection}>
                  <p label={"نام محصول"} className={styles.title}>
                    نام محصول
                  </p>
                  <input
                    type="text"
                    aria-label="نام محصول"
                    className={styles.TitleInput}
                    value={TitleValue}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className={styles.subTitleSection}>
                  <p className={styles.subTitle}>قیمت</p>
                  <input
                    type="text"
                    aria-label="زیرنویس محصول"
                    className={styles.SubtitleInput}
                    value={SubTitleValue}
                    onChange={handleSubTitleChange}
                  />
                </div>
                <div className={styles.titleSection}>
                  <p label={"نام محصول"} className={styles.title}>
                    تعداد موجودی
                  </p>
                  <input
                    type="number"
                    aria-label="تعداد موجودی"
                    className={styles.TitleInput}
                    value={Amount}
                    onChange={handleAmountChange}
                  />
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
