import React from 'react';
import styles from './PopularGame.module.scss';
import BuyButton from '../BuyButton/BuyButton';
import image from '../../assets/5.jfif'

export default function PopularGame({ name }) {
  const backgroundImageStyle = {
    backgroundImage: 'url(../../assets/5.jfif)',
    backgroundPosition: '-2.842px -20.969px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: 'lightgray',
  };
  const HandleClick = () => {
    window.location.href = '/Product'
  }

  return (
    <div className={styles.PopularGame} onClick={()=> HandleClick()}  >
      <div className={styles.PopularGameTitle}>
        <div className={styles.PopularGameTitleText}>{name}</div>
        <BuyButton/>
      </div>
    </div>
  );
}
