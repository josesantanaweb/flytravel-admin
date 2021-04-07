import React from 'react';
import { FaPlus, FaLock } from "react-icons/fa";
import Input from "../UI/Input/Input"
import Select from "../UI/Select/Select"
import Button from "../UI/Button/Button"

import styles from './Payments.module.css';

const months = [
  {value: "enero", label: "Enero"},
  {value: "febrero", label: "Febrero"}
]

const onChange = () => ({})

const Payments = () => {
  return (
    <div className={styles.payments}>
      <h3 className={styles.title}>Metodos de pago</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.add}>
            <FaPlus size="14px" color="#fe7700"/>
            <h3>Agregar tarjetas de credito</h3>
          </div>
          <div className={styles.rowone}>
            <Input label="Numero" placeholder="Ingresa 16 digitos" />
            <Select
              label="Vencimiento" 
              placeholder="Mes" 
              options={months} 
              onChange={onChange}
            />
            <Input placeholder="Año" />
          </div>
          <div className={styles.rowtwo}>
            <Input label="Titular" placeholder="Nombre del Titular" />
          </div>
          <div className={styles.security}>
            <FaLock size="14px" color="#00DCB4"/>
            <h4>Este es un sitio web seguro</h4>
          </div>
          <div>
            <Button type="submit" label="Guardar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments