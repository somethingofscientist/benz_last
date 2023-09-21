import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Secondary_blister = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            heading: "APET Tray",
            image: vci_film,
            content: "Welcome to BENZ Packaging, your trusted provider of high-quality APET trays. Our APET trays are designed to offer secure packaging and attractive display options for a wide range of products. With our commitment to quality and innovation, we strive to provide packaging solutions that meet your specific needs and exceed your expectations.",
        },
        {
            number: "2",
            heading: "Food Grade PET Tray",
            image: vci_film,
            content: "Welcome to BENZ Packaging, your trusted source for food-grade PET trays. Our food-grade PET trays are designed to provide safe and hygienic packaging solutions for a wide range of food products. With our commitment to quality and food safety, we aim to deliver packaging solutions that meet the highest industry standards.",
        },
        {
            number: "3",
            heading: "Injection Moulding Tray",
            image: vci_film,
            content: "Welcome to BENZ Packaging, your trusted provider of high-quality injection molding trays. Our injection molding trays are designed to offer efficient and customized packaging solutions for a wide range of products. With our commitment to excellence and innovation, we strive to provide packaging solutions that meet your specific needs and enhance your product presentation.",
        },
        {
            number: "4",
            heading: "Thermoformed Tray",
            image: vci_film,
            content: "Welcome to BENZ Packaging, your trusted provider of high-quality thermoformed trays. Our thermoformed trays offer a customized packaging solution designed to protect and display your products with utmost precision and care. With BENZ Packaging, you can rely on our expertise in thermoforming technology to deliver trays that meet your specific requirements and enhance the presentation of your products.",
        },
    ]
    return (
        <>
            <div className={styles.header_bg}>
                <img src={header_heading} alt="" />
                <div className={styles.imageContainer}></div>
                <div className={styles.header}>
                    {t("Blister Tray")}
                </div>
            </div>
            {
                arr.map((item) => (
                    <div className={styles.automobile_container} id='section3'>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>{item.number}</div>
                            <div className={styles.auto_letter}>{t(`${item.heading}`)}</div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                                {/* <Link to={item.page_link}>
                    <div className={styles.auto_pack}>
                      Pack With Us
                    </div>
                  </Link> */}
                            </div>
                            <div className={styles.auto_img_text}>{t(`${item.content}`)}</div>
                        </div>

                        {/*   
              {
                item.isSlider && <Slider subProducts={item.subProducts} />
              } */}
                    </div>
                ))
            }
        </>
    )
}

export default Secondary_blister;