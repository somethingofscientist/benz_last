import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'
import { useTranslation } from 'react-i18next';

const Sticky_header_industry = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.sticky_container}>
            <div className={styles.sticky_header}>
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        {t("Packaging Facts")}
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        {t("Packaging Tips")}
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        {t("Work With Us")}
                    </div>
                </a>
                <a href="#section4">
                    <div className={styles.sticky_link}>
                        {t("Become a Distributor")}
                    </div>
                </a>
                <a href="#rest1">
                    <div className={styles.sticky_link}>
                        {t("FAQ")}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sticky_header_industry