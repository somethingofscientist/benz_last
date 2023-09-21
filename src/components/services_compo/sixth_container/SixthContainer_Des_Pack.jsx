import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../images/engine.svg'
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/services/Long term packaging.jpeg'

const Descicannt = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            {/* <Routes>
                <Route path="/dproducts" element={<Homepage />} />
                <Route path="/dcertifications" element={<Industry />} />
                <Route path="/dapplications" element={<Product />} />
            </Routes> */}
            <div className={styles.automobile_container} id='section4'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>6</div>
                    <div className={styles.auto_letter}>{t("Long Term Packaging")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={img1} alt="engine" />
                    </div>
                    <div className={styles.auto_img_text}>
                    {t("At BENZ Packaging, we understand that some products require long-term packaging solutions to ensure their protection and integrity over extended periods. That's why we offer specialized long-term packaging services designed to meet the unique requirements of products that will be stored or transported for extended durations. With our expertise, quality materials, and attention to detail, we provide reliable and durable packaging solutions for your long-term needs.")}
                    <br /><br />
                    {t("Comprehensive Protection: Our long-term packaging solutions are designed to provide comprehensive protection for your products during storage and transportation. We carefully assess the specific characteristics of your goods, such as fragility, sensitivity to environmental factors, and susceptibility to corrosion or damage. Based on this assessment, we select suitable packaging materials and techniques to safeguard your products throughout their extended lifecycle.")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt