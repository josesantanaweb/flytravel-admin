import React from 'react';
import styles from './Layout.module.css';

import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;