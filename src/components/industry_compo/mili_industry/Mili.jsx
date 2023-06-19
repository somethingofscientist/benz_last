import React from 'react'
import styles from './Mili.module.css'
import engine from '../../images/war.svg';
import Slider from '../horizontal_slider/Slider';

const Mili = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section2'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>2</div>
                    <div className={styles.auto_letter}>Military Applications  </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                        <div className={styles.auto_pack}>
                            Pack With Us
                        </div>
                    </div>
                    <div className={styles.auto_img_text}>
                    Benz Packaging plays a vital role in protecting and securing sensitive military equipment, weaponry, and supplies. These solutions are engineered to withstand extreme conditions, ensure confidentiality, and provide tailored protection. By combining durability, security, logistical efficiency, and sustainability, Benz Packaging contributes to the effective and safe deployment of military assets.
                    </div>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default Mili