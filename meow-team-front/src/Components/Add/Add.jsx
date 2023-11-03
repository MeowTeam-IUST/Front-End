import React from 'react'
import { useState,useEffect } from 'react';
import styles from '../../Pages/AdminProduct/AdminProduct.module.scss'
export default function Add() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    }

    
  const handleClose = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  }
  console.log(showPopup)

    return (
            
        <div className={styles.AddCard} >
        <div className={styles.Plus}onClick={handleClick}>+</div>
        <div className={styles.Plus1}>اضافه کردن دسته</div>
        {showPopup && 
           <div className={styles.Backdrop} onClick={handleClose}>
            <div className={styles.Popup}>
                <div className={styles.Popup1}>
                    <div className={styles.cardinfo}>اطلاعات کارت</div>
                    <div className={styles.cardinfoo}>
                    <div className={styles.cardinfoo1}>
                        <div className={styles.cardinfoo11}>زیرنویس کارت</div>
                        <div className={styles.cardinfo12}> نتا</div>
                        </div>
                        <div className={styles.cardinfoo1}>
                    <div className={styles.cardinfoo11}>
                        نام کارت  
                        </div>
                        <div className={styles.cardinfo12}>ذان</div>
                        </div>
                    </div>
                    <div className={styles.cardinp}> 
                    <div className={styles.cardinp1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"  viewBox="0 0 80 80" fill="none">
                <g clip-path="url(#clip0_370_2594)">
                <path d="M33.3334 53.3334H46.6667C48.5001 53.3334 50.0001 51.8334 50.0001 50.0001V33.3334H55.3001C58.2667 33.3334 59.7667 29.7334 57.6667 27.6334L42.3667 12.3334C41.0667 11.0334 38.9667 11.0334 37.6667 12.3334L22.3667 27.6334C20.2667 29.7334 21.7334 33.3334 24.7001 33.3334H30.0001V50.0001C30.0001 51.8334 31.5001 53.3334 33.3334 53.3334ZM20.0001 60.0001H60.0001C61.8334 60.0001 63.3334 61.5001 63.3334 63.3334C63.3334 65.1667 61.8334 66.6667 60.0001 66.6667H20.0001C18.1667 66.6667 16.6667 65.1667 16.6667 63.3334C16.6667 61.5001 18.1667 60.0001 20.0001 60.0001Z" fill="#4318FF"/>
                </g>
                <defs>
                    <clipPath id="clip0_370_2594">
                    <rect width="80" height="80" fill="white"/>
                    </clipPath>
                </defs>
                </svg> 
                <div className={styles.cardinp2}> UploadFiles</div>
                <div className={styles.cardinp3}>PNG, JPG and GIF files are allowed </div>
                    </div>
                    <div className={styles.cardinpp1}> 
                    <div className={styles.cardinpp2}> 
                    <div className={styles.cardinpp21}> آپلود عکس کارت</div>
                    <div className={styles.cardinpp22}> از این قسمت می‌توانید برای کارت محصول خود عکس بارگزاری نمایید</div>
                    </div>
                    <button className={styles.cardinpp3}> آپلود فایل</button>
                    </div>
                     
                    </div>
                    <div className={styles.btpuu}>
                    <button className={styles.btpu}> انصراف</button>
                    <button className={styles.btpu1}> ذخیره</button>
                    </div>
                    </div>
                    
                
             <button>Close</button>
           </div>
           </div>
        }
      
      </div>
    )
}