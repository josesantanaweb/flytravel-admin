import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <a href="/" className={styles.link}>Home</a>
        <a href="/flights" className={styles.link}>Vuelos</a>
      </div>
      <div className={styles.user}>
        <img src="img/avatar.jpg" alt="user"/>
        <p>Administrador</p>
        <i className="fa fa-angle-down"></i>
      </div>
    </div>
  )
}

export default Navbar
