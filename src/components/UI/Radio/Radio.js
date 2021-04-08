import React from 'react';
import styles from './Radio.module.css';

const Radio = ({ label, onChange, name, id, checked}) => {
  return (
    <div class={styles.radio}>
      <input 
        type="radio" 
        id={id} 
        name={name} 
        checked={checked}/>
      <label for={id}>{label}</label>
    </div>
  )
}

export default Radio