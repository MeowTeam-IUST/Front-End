import React from 'react'
// import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
import styles from "./Productcard.module.scss";
import { useState,useEffect } from 'react';
import Requests from '../../API/Requests';
import Popup from '../Popup/Popup.jsx'; // Adjust the path based on your file structure
import AddToCart from '../AddToCart/AddToCart'
import { BASE_URL } from '../../API/consts';

export default function Productcard({name, price, changeButtonColor,showdiv,onDelete,applyLTR, onSave , image , id , description, refresh , setRefresh}) {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const clickon = () => {
    if (changeButtonColor)
      DEL()
    else
      openPopup();
  };
  const DEL = async () =>  {
    console.log(id)
    try {
      const res = await Requests().DelProduct(id);
      console.log(res.data);
    } catch (error) {
      console.error("Errordeleted product:", error);
    }
    setRefresh(!refresh)

}
    return (
      <div
        className={styles.productCard}
        style={{ backgroundImage: `url(${ image})` }}
      >
        {/* {showdiv && (
          <div className={styles.delete}>
            <button className={styles.delete1} onClick={onDelete}>
              حذف محصول
            </button>
          </div>
        )} */}
        <div className={styles.productCardInfo}>
          <div className={styles.nameButton}>{name}</div>
          <div className={styles.priceButton}>{price}</div>
          <button className={styles.buyButton} onClick={()=>clickon()}>
            {changeButtonColor ? "حذف" : "خرید"}
          </button>
        </div>

        {/* Popup component */}
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          title={"جزئیات سفارش"}
          content={<AddToCart id={id} CardDescription={description} />}
        />
        {/* {showPopup && (
          <div className={styles.Backdrop} onClick={handleClose}>
            <div
              className={styles.Popup}
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className={`${styles.Popup1} ${
                  applyLTR ? styles.ltrDirection : ""
                }`}
              >
                <div className={styles.cardinfo}>اطلاعات کارت</div>
                <div className={styles.cardinfoo}>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>قیمت</div>
                    <input className={styles.cardinfo12} id="priceInput" />
                  </div>
                  <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>نام کارت</div>
                    <input className={styles.cardinfo12} id="nameInput" />
                  </div>
                </div>
                <div className={styles.cardinp}>
                  <div className={styles.cardinp1}>
                    {!imageUploaded ? (
                      <div className={styles.cardinp2}>UploadFiles</div>
                    ) : (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className={styles.cardinp1}
                      />
                    )}
                    <div className={styles.cardinp3}>
                      PNG, JPG and GIF files are allowed
                    </div>
                  </div>
                  <div className={styles.cardinpp1}>
                    <div className={styles.cardinpp2}>
                      <div className={styles.cardinpp21}>آپلود عکس کارت</div>
                      <div className={styles.cardinpp22}>
                        از این قسمت می‌توانید برای کارت محصول خود عکس بارگزاری
                        نمایید
                      </div>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        handleFileChange(event);
                        setImageUploaded(true);
                      }}
                    />
                    <button
                      className={styles.cardinpp3}
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                    >
                      آپلود فایل
                    </button>
                  </div>
                </div>
                <div className={styles.btpuu}>
                  <button className={styles.btpu}>انصراف</button>
                  <button className={styles.btpu1} onClick={handleSaveClick}>
                    ذخیره
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    );
}
