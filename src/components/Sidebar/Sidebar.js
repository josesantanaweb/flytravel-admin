import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.brand}>
        <img src="img/logo.png" alt="logo"/>
      </div>
      <div className={styles.inner}>
        <p className={styles.label}>Menu</p>
        <Link to="/reservations"  className={styles.link}>
          <i className="fa fa-suitcase"></i>
          Mis Reservas
        </Link>
        <Link to="/history"  className={styles.link}>
          <i className="fa fa-history"></i>
          Historial
        </Link>
        <Link to="/profile"  className={styles.link}>
          <i className="fa fa-user"></i>
          Perfil
        </Link>
        <Link to="/passengers"  className={styles.link}>
          <i className="fa fa-users"></i>
          Pasajeros
        </Link>
        <Link to="/payments"  className={styles.link}>
          <i className="fa fa-credit-card-alt"></i>
          Metodos de Pagos
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
