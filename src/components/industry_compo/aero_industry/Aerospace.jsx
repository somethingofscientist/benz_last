import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';

const Aerospace = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section3'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>3</div>
                    <div className={styles.auto_letter}>Aerospace </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                        <div className={styles.auto_pack}>
                            Pack With Us
                        </div>
                    </div>
                    <div className={styles.auto_img_text}>
                    Benz packaging plays a crucial role in safeguarding sensitive aerospace components, equipment, and systems. These solutions are designed to withstand extreme conditions, protect against environmental factors, and comply with industry regulations. By combining durability, protection, efficiency, compliance, and sustainability, Benz packaging ensures the safe and efficient handling of aerospace assets throughout their lifecycle.
                    </div>
                </div>
            <Slider />
            </div>
        </>
    )
}

export default Aerospace