import React from 'react'
import styles from './Company_Marquee.module.css';
import Marquee from 'react-fast-marquee';
import c0 from '../../images/company/renault.png'
import c1 from '../../images/company/suzu.png';
import c2 from '../../images/company/tata.png';
import c3 from '../../images/company/toyo.png';
import c4 from '../../images/company/volvo.png';
import c5 from '../../images/company/yamaha.png';


import c6 from '../../images/company/1200px-Force_Motors_Logo.svg.png';
import c7 from '../../images/company/Ashok_Leyland-Logo.wine.png';
import c8 from '../../images/company/eicher.png';
import c9 from '../../images/company/new_itl.png';


const Company_Marquee = () => {
    return (
        <>
            <div className={styles.company_container}>
                <Marquee>
                    <div className={styles.company_logo}>
                        <img src={c0} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c1} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c2} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c3} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c4} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c5} alt="" />
                    </div>



                    <div className={styles.company_logo}>
                        <img src={c6} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c7} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c8} alt="" />
                    </div>
                    <div className={styles.company_logo}>
                        <img src={c9} alt="" />
                    </div>


                </Marquee>
            </div>
        </>
    )
}

export default Company_Marquee