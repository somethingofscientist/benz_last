import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from  '../../images/engine.svg'

const Descicannt = () => {
    return (
        <>
            <div className={styles.automobile_container}>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>3</div>
                    <div className={styles.auto_letter}>Service </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                       
                    </div>
                    <div className={styles.auto_img_text}>
                        Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Descicannt