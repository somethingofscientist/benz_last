import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {
    
    const { t, i18n } = useTranslation();
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "VCI 25",
            image: engine,
            image_text: "Benz Packaging is pleased to present our VCI 25, a powerful corrosion protection solution designed specifically for metals. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable metal products from corrosion.",
            image_text2: "VCI 25 stands for Volatile Corrosion Inhibitor with a protection span of up to 25 years. This long-lasting corrosion protection technology creates a protective barrier on metal surfaces, preventing the formation of rust and corrosion. The VCI molecules released by VCI 25 form a thin, invisible layer that adheres to the metal, providing continuous and reliable protection over an extended period."
         },
         {
            id: "section2",
            number: "2",
            heading: "Propatech VCI emitter",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our Propatech VCI Emitter, an advanced solution designed to provide superior corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2:"Our Propatech VCI Emitter utilizes Volatile Corrosion Inhibitor (VCI) technology to create a protective atmosphere that inhibits the formation of corrosion on your products. These emitters release VCI molecules in a controlled and continuous manner, ensuring efficient and long-lasting corrosion protection."
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Tablets",
            image: engine,
            image_text:"Benz Packaging is pleased to introduce our VCI Tablets, a convenient and effective solution for corrosion protection of metal products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI Tablets utilize Volatile Corrosion Inhibitor (VCI) technology to create a protective shield that prevents the formation of rust and corrosion on metal surfaces. These tablets are specially formulated to release VCI molecules, which form a thin, invisible layer on the metal, providing continuous corrosion protection."
        },
        
        {
            id: "section4",
            number: "4",
            heading: "VCI Foam",
            image: engine,
            image_text:"Benz Packaging is excited to introduce our VCI Foam, a versatile solution that combines corrosion protection with excellent cushioning properties. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI Foam incorporates Volatile Corrosion Inhibitor (VCI) technology, creating a protective barrier that inhibits the formation of rust and corrosion on metal surfaces. The foam is specially designed to release VCI molecules, which form a thin, invisible layer on the metal, providing continuous corrosion protection."
        },
        
        {
            id: "section5",
            number: "5",
            heading: "VCI Noxy",
            image: engine,
            image_text:"Benz Packaging is proud to introduce VCI Noxy, our advanced solution for corrosion protection of ferrous and non-ferrous metals. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "VCI Noxy utilizes Volatile Corrosion Inhibitor (VCI) technology to create a protective shield that inhibits the formation of rust and corrosion on metal surfaces. This specially formulated solution releases VCI molecules that form a thin, invisible layer on the metal, providing continuous and effective corrosion protection."
        },
        
    ]
    return (
        <>
            {
                arr.map((item => (
                    <div className={styles.automobile_container} id={item.id}>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>
                                {item.number}
                            </div>
                            <div className={styles.auto_letter}>
                            {t(`${item.heading}`)}
                            </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                            </div>
                            <div className={styles.auto_img_text}>
                            {t(`${item.image_text}`)}
                                <br />
                                {t(`${item.image_text2}`)}
                            </div>
                        </div>
                    </div>
                )))
            }
        </>
    )
}

export default Descicannt