import React from 'react';
import styles from './PopularGame.module.scss';
import BuyButton from '../BuyButton/BuyButton';

export default function PopularGame({ name, image }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: '-2.842px -20.969px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    background: 'lightgray',
    
  };

  return (
    <div className={styles.PopularGame} style={backgroundImageStyle}>
      <div className={styles.PopularGameTitle}>
        <div className={styles.PopularGameTitleText}>{name}</div>
        <BuyButton/>
      </div>
    </div>
  );
}
