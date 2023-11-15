import React from 'react'
import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
import { useState,useEffect } from 'react';
export default function Productcard({name, price, changeButtonColor,showdiv,onDelete,applyLTR, onSave}) {
            const [showPopup, setShowPopup] = useState(false);
            const [imageUploaded, setImageUploaded] = useState(false);

            const handleClick = () => {
                setShowPopup(true);
            }

            
        const handleClose = (event) => {
            event.stopPropagation();
            setShowPopup(false);
        }
        const handleSaveClick = () => {
            const newName = document.getElementById('nameInput').value;
            const newPrice = document.getElementById('priceInput').value;
            onSave(newName, newPrice);
          };
        console.log(showPopup)
        const [selectedImage, setSelectedImage] = useState(null);

        const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
        }
    return(
        <div className={styles.cardofpro}>
            {showdiv && <div className={styles.delete}>
                <button className={styles.delete1} onClick={onDelete}>
                    حذف محصول
                </button>
            </div>}
            <div className={styles.cardofpro1}>
                <div className={styles.t1}>{name}</div>
                <div className={styles.t2}>{price}</div>
                <button className={`${styles.t3} ${changeButtonColor ? styles.buttonColorChange : ''}`} onClick={handleClick}>
                    {changeButtonColor ? 'ویرایش' : 'خرید'}
                </button>
            </div>
            {showPopup && <div className={styles.Backdrop} onClick={handleClose}>
            <div className={styles.Popup} onClick={(event) => event.stopPropagation()}>
              <div className={`${styles.Popup1} ${applyLTR ? styles.ltrDirection : ''}`}>
                <div className={styles.cardinfo}>اطلاعات کارت</div>
                <div className={styles.cardinfoo}>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>قیمت</div>
                    <input className={styles.cardinfo12} id="priceInput" />
                  </div>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>نام کارت</div>
                    <input className={styles.cardinfo12} id="nameInput"  />
                  </div>
                </div>
                <div className={styles.cardinp}> 
                  <div className={styles.cardinp1}>
                  {!imageUploaded ? 
                    <div className={styles.cardinp2}>UploadFiles</div> :
                    <img src={selectedImage} alt="Selected" className={styles.cardinp1} />
                    }
                    <div className={styles.cardinp3}>PNG, JPG and GIF files are allowed</div>
                  </div>
                  <div className={styles.cardinpp1}> 
                    <div className={styles.cardinpp2}> 
                      <div className={styles.cardinpp21}>آپلود عکس کارت</div>
                      <div className={styles.cardinpp22}>از این قسمت می‌توانید برای کارت محصول خود عکس بارگزاری نمایید</div>
                    </div>
                    <input type="file" id="fileInput"  accept="image/*" style={{display: 'none'}} onChange={(event) => { handleFileChange(event); setImageUploaded(true); }} />
                    <button className={styles.cardinpp3} onClick={() => document.getElementById('fileInput').click()}>آپلود فایل</button>
                  </div>
                </div>
                <div className={styles.btpuu}>
                  <button className={styles.btpu}>انصراف</button>
                  <button className={styles.btpu1} onClick={handleSaveClick}>ذخیره</button>
                </div>
              </div>
            
            </div>
            </div>}
        </div>
    )
}