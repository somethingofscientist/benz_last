import React from 'react'
import styles from './Electro.module.css'
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Electro = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.automobile_container} id='section5'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>5</div>
                    <div className={styles.auto_letter}>{t("Electronics")}  </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        {t("Benz Packaging specializes in providing reliable and efficient packaging solutions for the electronics industry. With expertise in primary and secondary packaging, as well as a commitment to quality control and customization, they ensure the safe transportation, storage, and presentation of electronic devices and components. Benz Packaging is a trusted partner for electronics companies seeking professional packaging services.")}

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
        </>
    )
}

export default Electro