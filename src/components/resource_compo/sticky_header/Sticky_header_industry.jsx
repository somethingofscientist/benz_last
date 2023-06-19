import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'

const Sticky_header_industry = () => {
    return (
        <div className={styles.sticky_container}>
            <div className={styles.sticky_header}>
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        Packaging Facts
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        Packaging Tips
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        Work with us
                    </div>
                </a>
                <a href="#section4">
                    <div className={styles.sticky_link}>
                        Become a distributor
                    </div>
                </a>
                <a href="#section5">
                    <div className={styles.sticky_link}>
                        FAQ
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sticky_header_industry