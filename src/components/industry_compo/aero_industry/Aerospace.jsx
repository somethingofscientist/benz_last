import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import aero from '../../images/aero.jpg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/Industries/aero.jpeg'

const Aerospace = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <a id='section3'>
            <div className={styles.automobile_container} >
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>3</div>
                    <div className={styles.auto_letter}>{t("Aerospace")} </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={img1} alt="engine" />

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        {t("Benz packaging plays a crucial role in safeguarding sensitive aerospace components, equipment, and systems. These solutions are designed to withstand extreme conditions, protect against environmental factors, and comply with industry regulations. By combining durability, protection, efficiency, compliance, and sustainability, Benz packaging ensures the safe and efficient handling of aerospace assets throughout their lifecycle.")}
                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack2}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <Slider /> */}
            </div>
            </a>
        </>
    )
}

export default Aerospace