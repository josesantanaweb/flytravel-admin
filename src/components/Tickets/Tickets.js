import React, {useState} from 'react';
import Button from "../UI/Button/Button"
import Input from "../UI/Input/Input"
import Modal from "../UI/Modal/Modal"

import { FaFilePdf } from "react-icons/fa";
import styles from './Tickets.module.css';

const Tickets = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.profile}>
      <h3 className={styles.title}>Boletos Emitidos</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <h3>Lista de Boletos</h3>
            <Button type="submit" label="Agregar" onClick={() => setIsOpen(true)}/>
          </div>
          <div className="class">
            <table>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Archivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2131231</td>
                  <td>13/12/2021</td>
                  <td className={styles.active}>Activo</td>
                  <td>
                    <a href="/" className={styles.file}>
                      <FaFilePdf className="mr-2"/>
                      21312312
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2131231</td>
                  <td>13/12/2021</td>
                  <td className={styles.active}>Activo</td>
                  <td>
                    <a href="/" className={styles.file}>
                      <FaFilePdf className="mr-2"/>
                      21312312
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className={styles.header}>
              <h3>Agregar Boleto</h3>
            </div>
            <div className={styles.row}>
              <Input label="Codigo" placeholder="Ingresa el Codigo" />
              <Input label="Fecha" placeholder="Ingresa el Fecha" />
            </div>
            <div className={styles.row}>
              <Input label="Estado" placeholder="Ingresa el Estado" />
              <div className={styles.document}>
                <label htmlFor="file">
                  <span>
                    Seleccionar Archivo
                  </span>
                  <input type="file" name="file" id="file"/>
                </label>
              </div>
              </div>
            <div className={styles.footer}>
              <Button type="submit" label="Guardar"/>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Tickets