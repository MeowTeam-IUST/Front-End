import React from 'react';
import PropTypes from 'prop-types';

import styles from './Popup.module.scss'; // Import your styles
import cross from '../../assets/cross.svg'; // Import your image
const Popup = ({ isOpen, onClose, content , title }) => {
  const overlayStyle = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div>
      {/* Dark overlay */}
      <div className={styles.overlay} style={overlayStyle} onClick={onClose}></div>

      {/* Popup */}
      <div className={styles.popup} style={overlayStyle}>
        {/* Close button */}
        <div className={styles.header}>
          <div className={styles.Title}>{title}</div>
          <div className={styles.closeButton} onClick={onClose}>
            <img src={cross} alt="" />
          </div>
        </div>

        {/* Content */}
        <div className={styles.popupContent}>{content}</div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};

export default Popup;
