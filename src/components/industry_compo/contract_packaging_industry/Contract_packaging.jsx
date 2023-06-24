import React from 'react'
import styles from './Contract_packaging.module.css'
import engine from '../../images/war.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';


const Contract_packaging = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section4'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>4</div>
                    <div className={styles.auto_letter}>Contract packaging  </div>
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
                        Benz Packaging offers reliable and professional contract packaging services. With expertise in primary packaging, secondary packaging, and co-packing, they provide customized solutions to meet the diverse packaging needs of businesses. Through their commitment to quality, precision, and customer satisfaction, Benz Packaging is a trusted partner for companies seeking efficient and effective packaging services.
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

export default Contract_packaging