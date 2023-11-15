import React from 'react'
import { useState,useEffect } from 'react';
import styles from '../../Pages/AdminProduct/AdminProduct.module.scss'
export default function Add({applyLTR,card}) {
    const [showPopup, setShowPopup] = useState(false);
    const [imageUploaded1, setImageUploaded1] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    }

    
  const handleClose = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  }
  console.log(showPopup)
  const [selectedImage1, setSelectedImage1] = useState(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setSelectedImage1(reader.result);
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    setSelectedImage1(null);
  }
}

    return (
            
        <div className={`${styles.AddCard} ${card ? styles.Cardnew : ''}`}>
        <div className={styles.Plus} onClick={handleClick}>+</div>
        <div className={styles.Plus1}>اضافه کردن دسته</div>
        {showPopup && 
          <div className={styles.Backdrop} onClick={handleClose}>
            <div className={styles.Popup} onClick={(event) => event.stopPropagation()}>
              <div className={`${styles.Popup1} ${applyLTR ? styles.ltrDirection : ''}`}>
                <div className={styles.cardinfo}>اطلاعات کارت</div>
                <div className={styles.cardinfoo}>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>زیرنویس کارت</div>
                    <input className={styles.cardinfo12}  />
                  </div>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>نام کارت</div>
                    <input className={styles.cardinfo12}  />
                  </div>
                </div>
                <div className={styles.cardinp}> 
                  <div className={styles.cardinp1}>
                  {!imageUploaded1 ? 
                    <div className={styles.cardinp2}>UploadFiles</div> :
                    <img src={selectedImage1} alt="Selected" className={styles.cardinp1} />
                    }
                    <div className={styles.cardinp3}>PNG, JPG and GIF files are allowed</div>
                  </div>
                  <div className={styles.cardinpp1}> 
                    <div className={styles.cardinpp2}> 
                      <div className={styles.cardinpp21}>آپلود عکس کارت</div>
                      <div className={styles.cardinpp22}>از این قسمت می‌توانید برای کارت محصول خود عکس بارگزاری نمایید</div>
                    </div>
                    <input type="file" id="fileInput" style={{display: 'none'}} onChange={(event) => { handleFileChange(event); setImageUploaded1(true); }} />
                    <button className={styles.cardinpp3} onClick={() => document.getElementById('fileInput').click()}>آپلود فایل</button>
                  </div>
                </div>
                <div className={styles.btpuu}>
                  <button className={styles.btpu}>انصراف</button>
                  <button className={styles.btpu1}>ذخیره</button>
                </div>
              </div>
            
            </div>
          </div>
        }
      </div>
      
    )
}