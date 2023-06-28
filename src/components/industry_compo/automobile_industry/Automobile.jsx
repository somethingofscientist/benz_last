import React from 'react'
import styles from './Automobile.module.css';
import automobile from '../../images/automobile.jpeg';
import automobile1 from '../../images/automobile1.jpeg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Automobile = () => {

    const arr = [
        {
            src:automobile
        },
        {
            src:automobile1
        },
    ]
    return (
        <>
            <div className={styles.automobile_container} id='section1'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>1</div>
                    <div className={styles.auto_letter}>Automobile Industry </div>
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
                                PACK WITH US
                            </div>
                        </Link>
                    </div>
                    <div className={styles.auto_img_text}>
                        The automobile industry relies on specialized packaging solutions to ensure the safe transportation, storage, and display of vehicles and their components. Customized packaging materials provide protection against damage, preserve aesthetics, optimize logistics, and contribute to sustainability efforts. By investing in tailored packaging solutions, the automobile industry continues to enhance efficiency, safety, and environmental responsibility throughout the supply chain.

                        <Link to="/contact_page"
                            style={{ textDecoration: "none", color: "white" }}>
                            <div className={styles.auto_pack2}>
                                PACK WITH US
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <Slider /> */}
            </div>
        </>
    )
}

export default Automobile