import React from 'react';
import Input from "../UI/Input/Input"
import Button from "../UI/Button/Button"

import { FaPen } from "react-icons/fa";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <h3 className={styles.title}>MiPerfil</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>
            <h3>Editar Perfil</h3>
          </div>
          <div className={styles.avatar}>
            <img src="img/default-user.png" alt="user"/>
            <input type="file" name="avatar" id="avatar"/>
            <label htmlFor="avatar">
              <FaPen size="12px"/>
            </label>
          </div>
          <div className={styles.row}>
            <Input label="Nombre" placeholder="Ingresa el nombre" />
            <Input label="Apellido" placeholder="Ingresa el apellido" />
          </div>
          <div className={styles.row}>
            <Input label="Telefono" placeholder="Ingresa el Telefono" />
            <Input label="Correo" placeholder="Ingresa el Correo" />
          </div>
          <div className={styles.row}>
            <Input label="DIreccion" placeholder="Ingresa el DIreccion" />
            <Input label="Ciudad" placeholder="Ingresa el Ciudad" />
          </div>
          <div>
            <Button type="submit" label="Guardar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile