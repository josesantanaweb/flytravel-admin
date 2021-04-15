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
        <a href="https://flytravelgoo.solutionzc.com/" className={styles.link}>
          <i className="fa fa-plane"></i>
          Buscar Vuelo
        </a>
        <Link to="/"  className={styles.link}>
          <i className="fa fa-suitcase"></i>
          Mis Reservas
        </Link>
        <Link to="/tickets"  className={styles.link}>
          <i className="fa fa-ticket"></i>
          Boletos Emitidos
        </Link>
        <Link to="/history"  className={styles.link}>
          <i className="fa fa-history"></i>
          Historial
        </Link>
        <Link to="/profile"  className={styles.link}>
          <i className="fa fa-user"></i>
          Perfil
        </Link>
      </div>
    </section>
  )
}

export default Sidebar
