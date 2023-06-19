import React from 'react'
import styles from './Environment.module.css'
// import Fade from 'react-reveal/Fade';
import { Fade, Slide } from "react-awesome-reveal";
import plant from '../../images/plant_m.svg'
const Environment = () => {
    return (
        <>
            <div className={styles.envo_container} id="section4">
                <div className={styles.about_compo_heading}>
                    Environmental Responsibilities
                </div>
                <Slide direction='right'>
                    <div className={styles.para1}>
                    Our packaging website is committed to promoting sustainable practices and reducing the environmental impact of packaging materials.
                    </div>
                </Slide>
                <div className={styles.plant_image}>
                    <Slide direction='left'>
                        <img src={plant} alt="plant" />
                    </Slide>
                </div>
                <Slide direction='left'>
                    <div className={styles.para2}>
                    We strive to offer eco-friendly packaging solutions, minimize waste generation, and educate our customers on responsible packaging practices.
                    </div>
                </Slide>
                <Slide direction='right'>
                    <div className={styles.para1}>
                    We strive to offer eco-friendly packaging solutions, minimize waste generation, and educate our customers on responsible packaging practices.
                    </div>
                </Slide>
            </div>
        </>
    )
}

export default Environment