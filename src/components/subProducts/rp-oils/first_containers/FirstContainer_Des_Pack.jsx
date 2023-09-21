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
            heading: "Short Term",
            image: engine,
            image_text: "BENZ Packaging is pleased to offer RP Oils Short Term, a range of temporary lubricants designed for various applications. Whether you need short-term lubrication during storage, assembly, or other temporary operations, our RP Oils Short Term provide effective lubrication and protection.",
            image_text2: "Our RP Oils Short Term are specially formulated to offer temporary lubrication for components and equipment. These oils provide a thin protective film that reduces friction, prevents corrosion, and ensures smooth operation during temporary periods. They are ideal for situations where long-term lubrication is not required or feasible."
         },

        {
            id: "section2",
            number: "2",
            heading: "Medium Term",
            image: engine,
            image_text:"BENZ Packaging is delighted to introduce RP Oils Medium Term, a range of lubricants specifically designed to provide reliable lubrication for intermediate durations. Whether you require lubrication for extended storage periods, medium-term operations, or equipment maintenance, our RP Oils Medium Term offer superior performance and protection.",
            image_text2: "RP Oils Medium Term are formulated with high-quality base oils and advanced additives, ensuring optimal lubrication and protection against friction, wear, and corrosion. These oils are engineered to maintain their lubricating properties for a medium duration, making them ideal for situations where long-term lubrication is not required, but temporary lubricants may fall short."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "Long Term",
            image: engine,
            image_text: "BENZ Packaging is proud to introduce RP Oils Long Term, a premium line of lubricants specifically formulated to provide extended protection and optimal performance for long-term lubrication needs. With our expertise in packaging technology, we offer reliable and innovative solutions to ensure your equipment operates smoothly and efficiently over extended periods.",
            image_text2:"RP Oils Long Term are meticulously engineered using high-quality base oils and advanced additives, delivering exceptional lubricating properties and superior protection against friction, wear, and corrosion. These oils are designed to withstand the demanding conditions of long-term operations, providing reliable lubrication and extending the lifespan of your equipment."
        }
        
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