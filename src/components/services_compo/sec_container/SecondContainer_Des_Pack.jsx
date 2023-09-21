import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../images/engine.svg'
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/services/sea worthy packaging.jpeg'

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
                    <div className={styles.auto_number}>2</div>
                    <div className={styles.auto_letter}>{t("Sea Worthy Packaging")} </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={img1} alt="engine" />

                        
                    </div>
                    <div className={styles.auto_img_text}>
                    {t("When it comes to shipping goods overseas, ensuring the safety and integrity of your products is paramount. BENZ Packaging specializes in sea-worthy packaging solutions that are specifically designed to withstand the rigors of long-distance transportation by sea. With our expertise in packaging and knowledge of international shipping requirements, we can provide you with reliable and robust packaging solutions for your export needs.")}
                    <br /><br />
                    {t("Durable Packaging Materials: We utilize high-quality materials that are known for their strength and durability to create sea-worthy packaging solutions. Our packaging materials are designed to withstand the challenges of sea transportation, including moisture, humidity, temperature fluctuations, and physical impacts. This ensures that your products remain protected throughout the entire shipping journey.")}  

                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt