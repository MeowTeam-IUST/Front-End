import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./AddCategoryPopUp.module.scss";
import Draggable from "react-draggable";
import Requests from "../../API/Requests";
import { useDispatch,useSelector } from 'react-redux';
import { setEditPopUp } from '../../Slices/StateSlice';
import { BASE_URL } from "../../API/consts";
import trash from '../../assets/trash.svg'
export const EditCategoryPopUp = ({ isOpen, onClose , id , setRefresh, refresh  }) => {
  const fileInputRef = React.createRef();
  const [TitleValue, setTitleValue] = useState("");
  const [SubTitleValue, setSubTitleValue] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [parentId, setParentId] = useState();
  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };
  const closee = () =>  {
    // dispatch(setEditPopUp({editPopUp: false}));
    onClose()
  };
  const DEL = async () =>  {
      // Add your submit logic here
      console.log(TitleValue,selectedImage,SubTitleValue)
      formData.append('Title', TitleValue);
      formData.append('Picture', image);
      formData.append('Banner', image);
      formData.append('SubTitle', SubTitleValue);
      formData.append('IsActive', false);
      formData.append('ParentID', parentId);
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
  const fetchProducts = async () => {
    const productsData = await Requests().getCategoryDetails(id);
    console.log(productsData);
    setSelectedImage(BASE_URL+"/"+productsData.imageURL)
    setImage(BASE_URL+"/"+productsData.imageURL)

    setTitleValue(productsData.title)
    setSubTitleValue(productsData.subTitle)
    setParentId(productsData.parentID)
  };
  useEffect(() => {
  
    fetchProducts();
  }, []);
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

  const handleSubTitleChange = (e) => {
    setSubTitleValue(e.target.value);
  };
  const formData = new FormData();

  const handleSubmit = async (event) => {
    // Add your submit logic here
    console.log(TitleValue,selectedImage,SubTitleValue)
    formData.append('Title', TitleValue);
    formData.append('Picture', image);
    formData.append('Banner', image);
    formData.append('subTitle', SubTitleValue);
    formData.append('IsActive', true);
    formData.append('ParentID', parentId);
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
  };


  return (
    <div>
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <div className={styles.popUp_top}>
              <div className={styles.popUp_Title}>اطلاعات کارت
              <img src={trash} width={40} alt="" onClick={()=> DEL()} />
              </div>
              <div className={styles.popUp_top_form}>
                <div className={styles.titleSection}>
                  <p className={styles.title}>نام کارت</p>
                  <input type="text" className={styles.TitleInput} value={TitleValue} onChange={handleTitleChange} />
                </div>
                <div className={styles.subTitleSection}>
                  <p className={styles.subTitle}>زیرنویس کارت</p>
                  <input type="text" className={styles.SubtitleInput} value={SubTitleValue} onChange={handleSubTitleChange}/>
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
              <button onClick={()=> closee()} className={styles.CancelButton}>
                انصراف
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};
