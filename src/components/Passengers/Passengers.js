import React from 'react';
import { FaPlus } from "react-icons/fa";
import Input from "../UI/Input/Input"
import Select from "../UI/Select/Select"
import Button from "../UI/Button/Button"

import styles from './Passengers.module.css';

const countries = [
  {value: "venezuela", label: "Venezuela"},
  {value: "peru", label: "Peru"}
]

const onChange = () => ({})

const Passengers = () => {
  return (
    <div className={styles.passengers}>
      <h3 className={styles.title}>Pasajeros</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.add}>
            <FaPlus size="14px" color="#fe7700"/>
            <h3>Agregar Pasajeros</h3>
          </div>
          <div className={styles.row}>
            <Input label="Nombre" placeholder="Ingresa el Nombre" />
            <Input label="Apellido" placeholder="Ingresa el Apellido" />
            <Input label="Correo" placeholder="Ingresa el Correo" />
          </div>
          <div className={styles.row}>
            <Select
              label="Vencimiento" 
              placeholder="Mes" 
              options={countries} 
              onChange={onChange}
            />
            <Input label="Tipo de Documento" placeholder="Ingresa la Cedula" />
            <Input label="Nacionalidad" placeholder="Ingresa la Nacionalidad" />
          </div>
          <div className={styles.row}>
            <Input label="Direccion" placeholder="Ingresa la Direccion" />
            <Input label="Numero de Documento" placeholder="Ingresa el Numero de Documento" />
          </div>
          <div>
            <Button type="submit" label="Guardar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Passengers