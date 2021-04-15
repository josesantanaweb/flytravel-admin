import React from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css';
import { FaTimes } from "react-icons/fa";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null

  return ReactDom.createPortal(
    <div>
      <div className={styles.overlay}/>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>
          <FaTimes/>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('root')
  )
}

export default Modal