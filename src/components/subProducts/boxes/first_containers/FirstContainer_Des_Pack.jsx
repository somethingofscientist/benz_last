import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import woodenBox from '../../../images/woodenBox.jpeg'
import paper_main from '../../../images/paper_main.jpeg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Wooden",
            image: woodenBox,
            image_text: "Benz Packaging proudly presents our range of wooden packaging solutions, designed to offer reliability and sustainability for a variety of packaging needs.",
            image_text2: "Wooden packaging has been a trusted choice for centuries due to its strength, durability, and natural appeal. At Benz Packaging, we offer a wide selection of wooden packaging options, including wooden crates, pallets, boxes, and more, to cater to the diverse requirements of different industries."
        },

        {
            id: "section2",
            number: "2",
            heading: "Paper",
            image: paper_main,
            image_text: "Wooden packaging has been a trusted choice for centuries due to its strength, durability, and natural appeal. At Benz Packaging, we offer a wide selection of wooden packaging options, including wooden crates, pallets, boxes, and more, to cater to the diverse requirements of different industries.",
            image_text2: "Our wooden packaging is crafted using high-quality, sustainable wood materials that are sourced responsibly. We prioritize environmentally-friendly practices and ensure that our wood is compliant with global forestry standards. By choosing wooden packaging from Benz Packaging, you can contribute to sustainable packaging solutions."
        },

        {
            id: "section3",
            number: "3",
            heading: "Plastic",
            image: engine,
            image_text: "Plastic packaging is widely used in various industries due to its excellent protective properties and versatility. Our plastic packaging options are designed to provide reliable containment and safeguard your products during transportation and storage.",
            image_text2: "We offer a wide selection of plastic packaging products, including plastic bags, containers, shrink wrap, stretch film, and more. These packaging materials are available in different sizes, shapes, and thicknesses, allowing for customization to suit your specific needs."
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