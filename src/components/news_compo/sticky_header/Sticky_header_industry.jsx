import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './Stikcy.module.css'

const Sticky_header_industry = () => {
    return (
        <div className={styles.sticky_container}>
            <div className={styles.sticky_header}>
                <a href="#section1">
                    <div className={styles.sticky_link}>
                        Events
                    </div>
                </a>
                <a href="#section2">
                    <div className={styles.sticky_link}>
                        Awards
                    </div>
                </a>
                <a href="#section3">
                    <div className={styles.sticky_link}>
                        Newsletter
                    </div>
                </a>
                <a href="#section4">
                    <div className={styles.sticky_link}>
                        Testimonials
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sticky_header_industry