import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import neutralacid from '../../../images/neutralacid.jpg'
import { useTranslation } from 'react-i18next';
import greenProLogo from '../../../images/new_images_client/AboutPage/green/Green Product Mark.jpeg'


const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Acidic",
            image: engine,
            image_text: "BENZ Packaging presents the Rust Remover RR 125 A, a potent liquid phosphoric acid-based cleaner engineered to effectively clean and eradicate rust from steel and iron components. It excels at removing heat scale, flux, and other oxides from steel, stainless steel, brass, copper,and aluminum. What sets RR 125 A apart is its unique ability to swiftly dissolve iron oxide while gently etching iron, allowing for longer soaking times with minimal damage.",
            image_text2: "This remarkable solution also leaves a thin iron phosphate coating, offering an added layer of rust prevention. For optimal protection, complement its use with our Loc Rust range of Rust Preventive Oils. Simply soak rusty parts, and with the assistance of an Ultrasonic Machine at 50°C, watch as the rust disappears, leaving your metal components rejuvenated and corrosion-free."
        },

        {
            id: "section2",
            number: "2",
            heading: "Neutral",
            greenProduct: "Green Product",
            image: neutralacid,
            image_text: "BENZ Packaging brings you the revolutionary Neutral Rust Remover, a highly efficient and eco-friendly solution to rejuvenate rusty parts. Our pH-neutral rust remover offers a safe and biodegradable method to completely restore rust-covered components, eliminating the need for labor-intensive and abrasive cleaning that can damage surfaces. The secret lies in its ability to break the iron-oxide chemical bond of rust without harming other metals or non-metals.",
            image_text2: "Whether it's crevices, pits, or threads, Neutral Rust Remover works diligently, leaving your parts rust-free and rejuvenated. For optimal results, pair it with an Ultrasonic Machine and heat it to 50°C for a speedy, thorough rust removal process"
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
                                {item.greenProduct ? (
                                    <div className={styles.greenrange}>
                                        <img src={greenProLogo} alt="" />
                                    </div>
                                ) : null}
                            </div>
                            {/* {item?.greenProduct ? <div className={styles.auto_letter2}>
                                {t(`${item?.greenProduct ?? ""}`)}
                            </div> : <></>} */}
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