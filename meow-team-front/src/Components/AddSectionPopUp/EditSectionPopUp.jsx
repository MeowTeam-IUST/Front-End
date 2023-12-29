import React, { useState , useEffect } from "react";
import axios from "axios";
import styles from "./AddSectionPopUp.module.scss";
import Draggable from "react-draggable";

import Requests from "../../API/Requests";
import trash from '../../assets/trash.svg'

export const EditSectionPopUp = ({ isOpen, onClose, refresh , setRefresh , id }) => {
  const fileInputRef = React.createRef();
  const [inputValue, setInputValue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [TitleValue, setTitleValue] = useState("");
  const fetchProducts = async () => {
    const productsData = await Requests().getCategoryDetails(id);
    console.log(productsData);

    setTitleValue(productsData.title)
  };
  useEffect(() => {
  
    fetchProducts();
  }, []);
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
  const DEL = async () =>  {
    // Add your submit logic here
    formData.append('Title', TitleValue);
    formData.append('IsActive', false);
    formData.append('ID', id);
    try {
      const res = await Requests().EditCategory(formData);
      console.log(res.data);
    } catch (error) {
      console.error("Error submitting category:", error);
    }

    console.log("Submitted value:", TitleValue);
    setRefresh(!refresh)
    onClose();
}
  const handleSubmit = async () => {
    // Add your submit logic here
    console.log("Submitted value:", TitleValue);
    formData.append('Title', TitleValue);
    formData.append('IsActive', true);
    formData.append('ID', id);



    // onSubmit(inputValue);
    try {
      const res = await Requests().EditCategory(formData);
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
              <div className={styles.popUp_Title}>اطلاعات دسته
              <img src={trash} width={40} alt="" onClick={()=> DEL()} />
              </div>
              <div className={styles.popUp_top_form}>
                <div className={styles.titleSection}>
                  <p className={styles.title}>نام دسته</p>
                  <input type="text" className={styles.TitleInput} value={TitleValue} onChange={handleTitleChange} />
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
