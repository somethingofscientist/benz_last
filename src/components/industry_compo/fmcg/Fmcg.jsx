import React from 'react'
import styles from './Contract_packaging.module.css'
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/Industries/FMCG.jpeg'

const Fmcg = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <a id='section6'>
            <div className={styles.automobile_container}>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>5</div>
                    <div className={styles.auto_letter}>{t("FMCG (Fast Moving Consumable Goods)")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={img1} alt="engine" />

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        {t("BENZ Packaging offers reliable and professional contract packaging services. With expertise in primary packaging, secondary packaging, and co-packing, they provide customized solutions to meet the diverse packaging needs of businesses. Through their commitment to quality, precision, and customer satisfaction, BENZ Packaging is a trusted partner for companies seeking efficient and effective packaging services.")}
                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack2}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <Slider /> */}
            </div>
            </a>
        </>
    )
}

export default Fmcg