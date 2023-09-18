import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import paper_cushion from '../../../images/paper_cushion.jpeg'
import paper_wrapping from '../../../images/paper_wrapping.jpeg'
import paper_void from '../../../images/paper_void.jpg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            greenProduct: "Green Product",
            heading: "Paper Cushioning",
            image: paper_cushion,
            image_text: "BENZ   Packaging   introduces   the   PaperSY   cushioning   paper   system,   a versatile   and   robust   solution   designed   for   safeguarding   heavy-weight products during transit and storage. Serving as both paper pads and versatile   cushioning,   it   ensures   secure   blocking   and   bracing   within cartons, enveloping your items in protective layers from all angles. With the simple machine, the PaperSY Classic produces tear-resistant, flexible, and highly malleable paper cushioning, making it the go-to choice for reliable product protection. Available in Roll Form in 80 GSM, 110 GSM and 135 GSM.",
            image_text2: "Our Paper Cushioning products are crafted with high-quality paper materials that provide superior shock absorption and cushioning properties. Whether you're shipping glassware, ceramics, electronics, or other fragile items, our Paper Cushioning creates a protective barrier that minimizes the risk of breakage and damage caused by impacts and vibrations."
        },

        {
            id: "section2",
            number: "2",
            heading: "Paper Void Fill",

            greenProduct: "Green Product",
            image: paper_void,
            image_text: "Benz Packaging is committed to providing efficient and sustainable packaging solutions, and our Paper Void Fill is a prime example. Designed to fill empty spaces within your packages, our Paper Void Fill ensures optimal protection for your products during shipping and handling.",
            image_text2: "Our Paper Void Fill is made from high-quality paper materials that are both lightweight and flexible. They are specifically designed to fill voids and gaps in your packages, preventing movement and minimizing the risk of damage caused by impact or shifting during transit."
        },

        {
            id: "section3",
            number: "3",
            heading: "Paper Wrapping",
            greenProduct: "Green Product",
            image: paper_wrapping,
            image_text: "Benz Packaging understands the importance of secure and environmentally friendly packaging solutions, and our Paper Wrapping is designed to meet those needs. Our Paper Wrapping provides a versatile and sustainable way to protect your products during shipping, storage, and handling.",
            image_text2: "Our Paper Wrapping is made from high-quality paper materials that offer strength and durability. It provides a reliable protective layer around your products, safeguarding them from scratches, dust, and minor impacts. Whether you're packaging individual items or bundling multiple products together, our Paper Wrapping ensures secure and efficient protection."
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
                            {item?.greenProduct ? <div className={styles.auto_letter2}>
                                {t(`${item?.greenProduct ?? ""}`)}
                            </div> : <></>}
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