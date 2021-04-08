import React from 'react';
import styles from './Layout.module.css';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <section className={styles.main}>
        <Navbar />
        {children}
      </section>
    </div>
  )
}

export default Layout;