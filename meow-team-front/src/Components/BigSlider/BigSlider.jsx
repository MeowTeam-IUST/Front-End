import React, { useState } from 'react';
import PopularGame from '../../Components/PopularGames/PopularGame';
import image1 from '../../assets/1.png';
import styles from './BigSlider.module.scss';
import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons'
// import '../../'
const BigSlider = ({ components }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % components.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? components.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.imageslider}>
      <button className={styles['prev-button']} onClick={handlePreviousSlide}>
        <UilAngleLeftB color="#E52A49" size="70"/>
      </button>
      <div className={styles.slidercontainer}>
        <div className={`slide active ${styles.slide}`} key={currentSlide}>
          <PopularGame
            key={currentSlide}
            name={components[currentSlide].name}
            image={image1}
          />
        </div>
      </div>
      <button className={styles['next-button']} onClick={handleNextSlide}>
        <UilAngleRightB color="#E52A49 "size="70"/>
      </button>
    </div>
  );
};

export default BigSlider;