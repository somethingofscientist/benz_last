import React from 'react'
import styles from './Electro.module.css'
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';


const Electro = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section5'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>5</div>
                    <div className={styles.auto_letter}>Electronics  </div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={engine} alt="engine" />

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack}>
                                PACK WITH US
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        Benz Packaging specializes in providing reliable and efficient packaging solutions for the electronics industry. With expertise in primary and secondary packaging, as well as a commitment to quality control and customization, they ensure the safe transportation, storage, and presentation of electronic devices and components. Benz Packaging is a trusted partner for electronics companies seeking professional packaging services.

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack2}>
                                PACK WITH US
                            </div>
                        </Link>
                    </div>

                </div>
                <Slider />
            </div>
        </>
    )
}

export default Electro