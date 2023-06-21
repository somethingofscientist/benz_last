import React from 'react'
import styles from './Distributor.module.css';
import top1 from '../../images/top1.svg';
import bottom1 from '../../images/bottom1.svg';
import { Link } from 'react-router-dom';


const Work_with_us = () => {
    return (
        <>
            <div className={styles.d_container} id='section3'>
                <div className={styles.d_left}>
                    <div className={styles.d_left_heading}>Work With Us</div>
                    <div className={styles.d_left_content}>
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                        <br /><br />
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                        <br /><br />
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                    </div>
                </div>
                <div className={styles.d_right}>
                    <div className={styles.top_img}>
                        <img src={top1} alt="" />
                    </div>
                    <div className={styles.bottom_img}>
                        <img src={bottom1} alt="" />
                    </div>
                    <Link to="/contact_page">
                        <div className={styles.join}>
                            Join Our Team
                        </div>
                    </Link>
                </div>

                <div className={styles.d_mobile_right}>
                    <div className={styles.top_mobile_img}>
                        <img src={top1} alt="" />
                    </div>
                    <Link to="/contact_page">
                        <div className={styles.join}>
                            Join Our Team
                        </div>
                    </Link>
                    <div className={styles.bottom_mobile_img}>
                        <img src={bottom1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work_with_us;