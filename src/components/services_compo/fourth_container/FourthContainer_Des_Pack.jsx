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
            <div className={styles.automobile_container} id='section4'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>4</div>
                    <div className={styles.auto_letter}>{t("Machine Packaging")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />
                    </div>
                    <div className={styles.auto_img_text}>
                    {t("In today's fast-paced industrial environment, optimizing packaging processes is essential to meet high production demands and ensure product quality. Benz Packaging specializes in machine packaging solutions that streamline and automate the packaging process, offering efficiency, speed, and consistency. With our expertise in packaging machinery and innovative technologies, we provide reliable and tailored solutions to meet your specific packaging requirements.")}
                    <br /><br />  
                    {t("Customized Machine Packaging Solutions: We understand that every product and packaging operation is unique. Our team works closely with you to analyze your packaging needs and develop customized machine packaging solutions. We consider factors such as product dimensions, packaging materials, throughput requirements, and automation level to design a system that integrates seamlessly into your production line.")}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt