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
                    <div className={styles.auto_letter}>{t("Service")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                    </div>
                    <div className={styles.auto_img_text}>
                        {t("Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.")}
                        <br /><br />
                        {t("Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt