import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../images/engine.svg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* <Routes>
                <Route path="/dproducts" element={<Homepage />} />
                <Route path="/dcertifications" element={<Industry />} />
                <Route path="/dapplications" element={<Product />} />
            </Routes> */}
            <div className={styles.automobile_container} id='section1'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>5</div>
                    <div className={styles.auto_letter}>{t("On Site Packaging")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                    </div>
                    <div className={styles.auto_img_text}>
                        {t("At Benz Packaging, we understand that certain situations require packaging solutions to be brought directly to your location. That's why we offer on-site packaging services, bringing our expertise, equipment, and materials directly to your facility. Our on-site packaging services are designed to provide you with convenience, efficiency, and professional packaging solutions tailored to your specific needs.")}
                        <br /><br />
                        {t("Convenience and Flexibility: With our on-site packaging services, you can eliminate the hassle and logistical challenges of transporting your products to a separate packaging facility. We bring our packaging expertise to you, saving you time, effort, and resources. Whether you have large or bulky items, delicate products, or a high volume of goods, our on-site packaging team is equipped to handle diverse packaging requirements.")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt