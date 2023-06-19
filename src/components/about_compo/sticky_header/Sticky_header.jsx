import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'

const Sticky_header = () => {
    return (
        <div className={styles.sticky_container}>
            <div className={styles.sticky_header}>
                <a href="#section0">
                    <div className={styles.sticky_link}>
                        Trusted
                    </div>
                </a>
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        History
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        Benefits
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        Awards
                    </div>
                </a>
                <a href="#section4">
                    <div className={styles.sticky_link}>
                        Environmental Responsibilities
                    </div>
                </a>
                <a href="#section5">
                    <div className={styles.sticky_link}>
                        Our Team
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sticky_header