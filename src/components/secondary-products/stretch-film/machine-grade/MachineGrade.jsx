import React from 'react'
import styles from '../../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../../images/engine.svg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const MachineGrade = () => {

    const { t, i18n } = useTranslation();
    const arr = [
        {
            number: "1",
            heading: "PreStretch Film",
            image: vci_film,
            content: "Welcome to Benz Packaging, your reliable source for high-quality PreStretch film. Our PreStretch film is an advanced packaging solution designed to provide optimal load stability and secure packaging for various industries and applications. With Benz Packaging, you can trust that our PreStretch film will enhance your packaging operations and protect your products during storage and transportation.",
        },
        {
            number: "2",
            heading: "Machine Grade Stretch Film",
            image: vci_film,
            content: "Welcome to Benz Packaging, your reliable supplier of high-quality machine grade stretch film. Our machine grade stretch film is specifically designed for automated packaging applications, providing an optimal solution for industries that require efficient and consistent wrapping of pallets and loads. With Benz Packaging, you can trust our machine grade stretch film to deliver reliable performance and secure packaging for your products.",
        },
    ]
    return (
        <>
            <div className={styles.header_bg}>
                <img src={header_heading} alt="" />
                <div className={styles.imageContainer}></div>
                <div className={styles.header}>
                    {t("Hand Grade Stretch Film")}
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

export default MachineGrade;