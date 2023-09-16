import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'
import { useTranslation } from 'react-i18next';

const Sticky_header = () => {
    
  const { t, i18n } = useTranslation();

    return (
        <div className={styles.sticky_container}>
            <div className={styles.sticky_header}>
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        {t("History")}
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        {t("Why choose us")}
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        {t("Awards")}
                    </div>
                </a>
                <a href="#section4">
                    <div className={styles.sticky_link}>
                        {t("Environmental Responsibilities")}
                    </div>
                </a>
                <a href="#section5">
                    <div className={styles.sticky_link}>
                        {t("Our Team")}
                    </div>
                </a>
                <a href="#section6">
                    <div className={styles.sticky_link}>
                        {t("Testimonial")}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sticky_header