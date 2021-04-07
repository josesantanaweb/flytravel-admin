import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, placeholder, onChange}) => {
  return (
    <div className={styles.inputgroup}>
      <label className={styles.label}>{label}</label>
      <input 
        type="text" 
        className={styles.input} 
        onChange={onChange}
        placeholder={placeholder}/>
    </div>
  )
}

export default Input
