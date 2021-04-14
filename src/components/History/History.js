import React from 'react';
import styles from './History.module.css';


const History = () => {
  return (
    <div className={styles.reservations}>
      <h3 className={styles.title}>Mi Historial</h3>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <h4>Destino Miami - Madrid</h4>
          </div>
          <div className={styles.name}>
            <p>A nombre de: <span>Carolina Hernadez</span></p>
          </div>
          <div className={styles.flight}>
            <div className={styles.trip}>
              Viaje de Ida
            </div>
            <p className={styles.route}>De Miami a Madrid el jueves, 11 de febrero</p>
            <div className={styles.row}>
              <div className={styles.scales}>
                <div>
                  <h4 className={styles.hour}>1: 55</h4>
                  <h4 className={styles.abbr}>PTY</h4>
                  <p className={styles.city}>Panama</p>
                </div>
                <div className={styles.stops}>
                  <div className={styles.stop}>
                    <p>CSS</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                  <div className={styles.stop}>
                    <p>IST</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                </div>
                <div>
                  <h4 className={styles.hour}>13: 50</h4>
                  <h4 className={styles.abbr}>MAD</h4>
                  <p className={styles.city}>Madrid</p>
                </div>
              </div>
              <div className={styles.duration}>
                <p>Duracion del Vuelo</p>
                <h4 className={styles.hour}>32h 55m</h4>
              </div>
              <div className={styles.class}>
                <p>Clase</p>
                <h4 className={styles.hour}>ECONOMY</h4>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.cardheader}>
            <h4>Destino Miami - Madrid</h4>
          </div>
          <div className={styles.name}>
            <p>A nombre de: <span>Carolina Hernadez</span></p>
          </div>

          <div className={styles.flight}>
            <div className={styles.round}>
              Viaje de Ida
            </div>
            <p className={styles.route}>De Miami a Madrid el jueves, 11 de febrero</p>
            <div className={styles.row}>
              <div className={styles.scales}>
                <div>
                  <h4 className={styles.hour}>1: 55</h4>
                  <h4 className={styles.abbr}>PTY</h4>
                  <p className={styles.city}>Panama</p>
                </div>
                <div className={styles.stops}>
                  <div className={styles.stop}>
                    <p>CSS</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                  <div className={styles.stop}>
                    <p>IST</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                </div>
                <div>
                  <h4 className={styles.hour}>13: 50</h4>
                  <h4 className={styles.abbr}>MAD</h4>
                  <p className={styles.city}>Madrid</p>
                </div>
              </div>
              <div className={styles.duration}>
                <p>Duracion del Vuelo</p>
                <h4 className={styles.hour}>32h 55m</h4>
              </div>
              <div className={styles.class}>
                <p>Clase</p>
                <h4 className={styles.hour}>ECONOMY</h4>
              </div>
            </div>
          </div>

          <div className={styles.flight}>
            <div className={styles.trip}>
              Viaje de Vuelta
            </div>
            <p className={styles.route}>De Miami a Madrid el jueves, 11 de febrero</p>
            <div className={styles.row}>
              <div className={styles.scales}>
                <div>
                  <h4 className={styles.hour}>1: 55</h4>
                  <h4 className={styles.abbr}>PTY</h4>
                  <p className={styles.city}>Panama</p>
                </div>
                <div className={styles.stops}>
                  <div className={styles.stop}>
                    <p>CSS</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                  <div className={styles.stop}>
                    <p>IST</p>
                    <span></span>
                    <img src="img/laser.png" alt="laser"/>
                  </div>
                </div>
                <div>
                  <h4 className={styles.hour}>13: 50</h4>
                  <h4 className={styles.abbr}>MAD</h4>
                  <p className={styles.city}>Madrid</p>
                </div>
              </div>
              <div className={styles.duration}>
                <p>Duracion del Vuelo</p>
                <h4 className={styles.hour}>32h 55m</h4>
              </div>
              <div className={styles.class}>
                <p>Clase</p>
                <h4 className={styles.hour}>ECONOMY</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History