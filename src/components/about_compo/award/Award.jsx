import React, { useState } from 'react'
import styles from './Award.module.css';
import stamp_paper from '../../images/stamp.svg'
import { useTranslation } from 'react-i18next';

import certificate1 from '../../certificates/BENZ_Award_1.jpeg'
import certificate2 from '../../certificates/BENZ_Award_2.jpg'
import certificate3 from '../../certificates/Certificate of Incorporation.jpg'
import certificate4 from '../../certificates/Global Recycle Standard_page-0001.jpg'
import certificate5 from '../../certificates/NEW ISO_page-0001.jpg'
import certificate6 from '../../certificates/folder1/Udyam Registration Certificate_page-0001.jpg'
import certificate7 from '../../certificates/folder2/EPR certificate_BENZ_page-0001.jpg'
import certificate7_1 from '../../certificates/folder2/EPR certificate_BENZ_page-0002.jpg'
import certificate7_2 from '../../certificates/folder2/EPR certificate_BENZ_page-0003.jpg'
import certificate8 from '../../certificates/folder3/Certificate-CTE_page-0001.jpg'
import certificate9 from '../../certificates/folder3/Certificate-CTE_page-0002.jpg'
import certificate10 from '../../certificates/folder3/Certificate-CTE_page-0003.jpg'
import certificate11 from '../../certificates/folder3/Certificate-CTE_page-0004.jpg'
import { useRef } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'

const Award = () => {
    const [page, setPage] = useState("product");
    const certificateContainerRef = useRef(null);

    const scrollLeft = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (certificateContainerRef.current) {
            certificateContainerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
        }
    };

    const { t, i18n } = useTranslation();

    return (
        <a id="section3">
            <div className={styles.award_container} >
                <div className={styles.about_compo_heading}>
                    {t("Awards and Certifications")}
                </div>
                <div className={styles.award_para}>
                    {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you require it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
                </div>
                {/* <div className={styles.award_img}>
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
            </div> */}

                <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                    {/* {t("Currently Certificate is Not  Available")} */}
                    <div className={styles.certificate}>
                        <div
                            className={styles.certificateContainer}
                            ref={certificateContainerRef}>
                            <img src={certificate1} alt="certificate" />
                            <img src={certificate2} alt="certificate" />
                            <img src={certificate3} alt="certificate" />
                            <img src={certificate4} alt="certificate" />
                            <img src={certificate5} alt="certificate" />
                            <img src={certificate6} alt="certificate" />
                            <img src={certificate7} alt="certificate" />
                            {/* <img src={certificate7_1} alt="certificate" /> */}
                            {/* <img src={certificate7_2} alt="certificate" /> */}
                            <img src={certificate8} alt="certificate" />
                            {/* <img src={certificate9} alt="certificate" /> */}
                            {/* <img src={certificate10} alt="certificate" /> */}
                            {/* <img src={certificate11} alt="certificate" /> */}
                        </div>
                        <button
                            className={styles.left_arrow}
                            onClick={scrollLeft}>
                            <BsArrowLeftCircle />
                        </button>
                        <button
                            className={styles.right_arrow}
                            onClick={scrollRight}>
                            <BsArrowRightCircle />
                        </button>
                    </div>
                </h1>
            </div>
        </a>
    )
}

export default Award