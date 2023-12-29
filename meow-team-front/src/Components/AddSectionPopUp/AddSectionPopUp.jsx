import React, { useState } from "react";
import axios from "axios";
import styles from "./AddSectionPopUp.module.scss";
import Draggable from "react-draggable";
import { FileDrop } from "../filedrop";
import Requests from "../../API/Requests";
export const AddSectionPopUp = ({ isOpen, onClose, refresh , setRefresh }) => {
  const fileInputRef = React.createRef();
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [TitleValue, setTitleValue] = useState("");

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
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
  const formData = new FormData()
  const handleSubmit = async () => {
    // Add your submit logic here
    console.log("Submitted value:", TitleValue);
    formData.append('Title', TitleValue);
    formData.append('IsActive', true);


    // onSubmit(inputValue);
    try {
      const res = await Requests().addCategory(formData);
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting category:", error);
    }
    setRefresh(!refresh)
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popUp_top}>
              <div className={styles.popUp_Title}>اطلاعات دسته</div>
              <div className={styles.popUp_top_form}>
                <div className={styles.titleSection}>
                  <p className={styles.title}>نام دسته</p>
                  <input type="text" className={styles.TitleInput} onChange={handleTitleChange} />
                </div>
                
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
