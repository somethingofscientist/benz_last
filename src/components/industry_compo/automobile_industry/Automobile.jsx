import React from 'react'
import styles from './Automobile.module.css';
import automobile from '../../images/automobile.jpg';
import automobile1 from '../../images/automobile1.jpeg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/Industries/Automobile2.jpeg'

const Automobile = () => {
    const { t, i18n } = useTranslation();

    const arr = [
        {
            src:img1
        },
        
    ]
    return (
        <>
            <a id='section1'>
            <div className={styles.automobile_container} >
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>1</div>
                    <div className={styles.auto_letter}>{t("Automobile Industry")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <Carousel
                            autoPlay={true}
                            interval={2000}
                            infiniteLoop
                            showStatus={false}
                            showThumbs={false}
                            showArrows={false}
                        >
                            {
                                arr.map((item) => (
                                    <div className={styles.images}>
                                        <img src={item.src} alt={item} />
                                    </div>
                                ))
                            }
                        </Carousel>
                        {/* <img src={automobile} alt="engine" /> */}

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack}>
                                {t("PACK WITH US")}
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        {t("The automobile industry relies on specialized packaging solutions to ensure the safe transportation, storage, and display of vehicles and their components. Customized packaging materials provide protection against damage, preserve aesthetics, optimize logistics, and contribute to sustainability efforts. By investing in tailored packaging solutions, the automobile industry continues to enhance efficiency, safety, and environmental responsibility throughout the supply chain.")}

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

export default Automobile