import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../images/new_images_client/services/Export packaging.jpeg'
import { useTranslation } from 'react-i18next';

// import img1 from '../../images/new_images_client/services/On site packaging..jpeg'

const Descicannt = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.automobile_container}>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>3</div>
                    <div className={styles.auto_letter}>{t("Export Packaging")} </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />


                    </div>
                    <div className={styles.auto_img_text}>
                        {t("When it comes to exporting your products to global markets, ensuring their safety and integrity during transit is crucial. Benz Packaging specializes in export packaging solutions that are designed to meet the unique challenges of international shipment. With our expertise in packaging and knowledge of export regulations, we provide reliable and effective packaging solutions that protect your products throughout their journey.")}
                        <br /><br />
                        {t("Customized Packaging Solutions: We understand that each product has distinct packaging requirements. Our team works closely with you to assess your specific needs and develop customized packaging solutions tailored to your products. We consider factors such as product dimensions, fragility, weight, and mode of transportation to create packaging that offers maximum protection and efficiency.")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt