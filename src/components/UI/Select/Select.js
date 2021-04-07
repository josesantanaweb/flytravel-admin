import React from 'react';
import styles from './Select.module.css';


const Select = ({ label, placeholder, onChange, options}) => {
  return (
    <div className={styles.inputgroup}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select} 
        onChange={onChange}
        placeholder={placeholder}
      >
        {
          options.map((option, i) => (
            <option key={option + 1} value={option.values}>{option.label}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select