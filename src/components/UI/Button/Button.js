import React from 'react';
import styles from './Button.module.css';


const Button = ({ label, type, onClick, link}) => {
  return (
    link 
    ? <a href={link}>{label}</a>
    : <button 
        type={type} 
        onClick={onClick}
        className={styles.button}
      >
        {label}
      </button>
  )
}

export default Button