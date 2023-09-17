import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'
import { useTranslation } from 'react-i18next';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'


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
            <div className={styles.sticky_header}
                ref={certificateContainerRef}
            >
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        {t("Automobile Industry")}
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        {t("Military Applications")}
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        {t("Aerospace")}
                    </div>
                </a>
                {/* <a href="#section4">
                    <div className={styles.sticky_link}>
                        {t("Contract Packaging")}
                    </div>
                </a> */}
                <a href="#section5">
                    <div className={styles.sticky_link}>
                        {t("Electronics")}
                    </div>
                </a>
                <a href="#section6">
                    <div className={styles.sticky_link}>
                        {t("FMCG (Fast Moving Consumable Goods)")}
                    </div>
                </a>
                <a href="#section7">
                    <div className={styles.sticky_link}>
                        {t("Retail")}
                    </div>
                </a>
                {/* <a href="#section5">
                    <div className={styles.sticky_link}>
                        Our Team
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