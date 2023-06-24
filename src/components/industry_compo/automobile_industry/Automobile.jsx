import React from 'react'
import styles from './Automobile.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';


const Automobile = () => {
    return (
        <>
            <div className={styles.automobile_container} id='section1'>
                <div className={styles.auto_heading}>
                    <div className={styles.auto_number}>1</div>
                    <div className={styles.auto_letter}>Automobile Industry </div>
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
                        The automobile industry relies on specialized packaging solutions to ensure the safe transportation, storage, and display of vehicles and their components. Customized packaging materials provide protection against damage, preserve aesthetics, optimize logistics, and contribute to sustainability efforts. By investing in tailored packaging solutions, the automobile industry continues to enhance efficiency, safety, and environmental responsibility throughout the supply chain.

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

export default Automobile