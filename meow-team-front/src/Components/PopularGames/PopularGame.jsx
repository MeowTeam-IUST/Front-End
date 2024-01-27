import React from 'react';
import styles from './PopularGame.module.scss';
import BuyButton from '../BuyButton/BuyButton';
import image from '../../assets/5.jfif'
import { BASE_URL } from '../../API/consts';

export default function PopularGame({ id , name , image , description }) {


  const HandleClick = () => {
    window.location.href = "/Product/" + id;
  }

  return (
    <div
      className={styles.PopularGame}
      style={{ backgroundImage: `url(${BASE_URL + "/" + image})` }}
      onClick={() => HandleClick()}
    >
      <div className={styles.PopularGameTitle}>
        <div className={styles.PopularGameTitleSection}>
          <div className={styles.PopularGameTitleText}>{name}</div>
          <div className={styles.PopularGameSubTitleText}>{description}</div>
        </div>

        <BuyButton />
      </div>
    </div>
  );
}
