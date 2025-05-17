import React from 'react';
import styles from './styles.module.css';

const SupportButton = () => {
  const handleSupportClick = () => {
    window.location.href = 'mailto:support@edna.io';
  };

  return (
    <button className={styles.supportButton} onClick={handleSupportClick}>
      Contact the support
    </button>
  );
};

export default SupportButton;