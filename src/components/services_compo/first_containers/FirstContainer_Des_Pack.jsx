import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../images/engine.svg'
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/services/Contract Packaging.jpeg'
import t1 from '../../images/new_images_client/services/t1.png'
import t2 from '../../images/new_images_client/services/t2.png'
import t3 from '../../images/new_images_client/services/t3.png'
import { Carousel } from 'react-responsive-carousel';


const Descicannt = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* <Routes>
                <Route path="/dproducts" element={<Homepage />} />
                <Route path="/dcertifications" element={<Industry />} />
                <Route path="/dapplications" element={<Product />} />
            </Routes> */}
            <div className={styles.automobile_container} id='section1'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>1</div>
                    <div className={styles.auto_letter}>{t("Contract Packaging")}</div>
                </div>

                <div className={styles.auto_img_container}>
                    <div className={styles.auto_img}>
                        <img src={img1} alt="engine" />

                    </div>

                    <div className={styles.auto_img}>

                        <Carousel
                            autoPlay={true}
                            interval={1000}
                            infiniteLoop
                            pauseOnHover={true}
                            showStatus={false}
                            showThumbs={false}
                            showArrows={false}
                        >
                            <img src={t1} alt="engine" />
                            <img src={t2} alt="engine" />
                            <img src={t3} alt="engine" />
                            {/* {Array.isArray(item.image) ? (
                                item.image.map((imageUrl, idx) => (
                                    <div className={styles.images} key={idx}>
                                        <img src={imageUrl} alt={imageUrl} />
                                    </div>
                                ))
                            ) : (
                                <div className={styles.images}>
                                    <img src={item.image} alt={item.image} />
                                </div>
                            )} */}
                        </Carousel>
                    </div>
                    {/* <div className={styles.auto_img_text}>
                        {t("Benz Packaging understands that every product is unique, and packaging plays a crucial role in its presentation, protection, and market appeal. That's why we offer comprehensive contract packaging services tailored to meet your specific requirements. With our expertise and state-of-the-art facilities, we can handle your packaging needs efficiently and effectively.")}
                        <br /><br />
                        {t("End-to-End Solutions: Our contract packaging services cover the entire packaging process, from concept development to final product delivery. We work closely with you to understand your product, target market, and packaging goals. Our experienced team will guide you through every step, ensuring that your packaging meets your specifications and exceeds your expectations.")}
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Descicannt