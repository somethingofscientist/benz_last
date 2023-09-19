import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';

const Sticky_header_industry = () => {
    const { t, i18n } = useTranslation();
    const certificateContainerRef = useRef(null);

    const scrollLeft = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft += 200;
        }
    };

    return (
        <div className={styles.sticky_container}>
            <div
                className={styles.sticky_header}
                ref={certificateContainerRef}
            >
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
                        {t("Become Our Distributor")}
                    </div>
                </a>
                {/* <a href="#rest1">
                    <div className={styles.sticky_link}>
                        {t("FAQ")}
                    </div>
                </a> */}
            </div>
            <button
                className={styles.left_arrow}
                onClick={scrollLeft}>
                <BsArrowLeftCircle />
            </button>
            <button
                className={styles.right_arrow}
                onClick={scrollRight}>
                <BsArrowRightCircle />
            </button>
        </div>
    )
}

export default Sticky_header_industry