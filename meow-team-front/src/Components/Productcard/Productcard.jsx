import React, { useState } from 'react';
import styles from '../../Pages/ProductPage/ProductPage.module.scss';
import Popup from '../Popup/Popup.jsx'; // Adjust the path based on your file structure
import AddToCart from '../AddToCart/AddToCart';
export default function Productcard({ name, price }) {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <div className={styles.cardofpro}>
        <div className={styles.cardofpro1}>
          <div className={styles.t1}>{name}</div>
          <div className={styles.t2}>{price}</div>
          <button className={styles.t3} onClick={openPopup}>
            خرید
          </button>
        </div>
      </div>

      {/* Popup component */}
      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={"جزئیات سفارش"}
        content={<AddToCart />}
      />
    </div>
  );
}
