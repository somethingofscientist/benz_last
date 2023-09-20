import React from 'react'
import styles from './Mili.module.css'
import engine from '../../images/war.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/Industries/Military.jpeg'

const Mili = () => {
    
    const { t, i18n } = useTranslation();

    return (
        <>
            <a id='section2'>
            <div className={styles.automobile_container} >
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>2</div>
                    <div className={styles.auto_letter}>{t("Military Applications")}  </div>
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
                        {t("Benz Packaging plays a vital role in protecting and securing sensitive military equipment, weaponry, and supplies. These solutions are engineered to withstand extreme conditions, ensure confidentiality, and provide tailored protection. By combining durability, security, logistical efficiency, and sustainability, Benz Packaging contributes to the effective and safe deployment of military assets.")}
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

export default Mili