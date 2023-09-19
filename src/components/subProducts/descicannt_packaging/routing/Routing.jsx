import React, { useState } from 'react'
import styles from './Routing.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstContainer from '../first_containers/FirstContainer_Des_Pack'
import { TbDownload } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import certificate1 from '../../../certificates/BENZ_Award_1.jpeg'
import certificate2 from '../../../certificates/BENZ_Award_2.jpg'
import certificate3 from '../../../certificates/Certificate of Incorporation.jpg'
import certificate4 from '../../../certificates/Global Recycle Standard_page-0001.jpg'
import certificate5 from '../../../certificates/NEW ISO_page-0001.jpg'
import certificate6 from '../../../certificates/folder1/Udyam Registration Certificate_page-0001.jpg'
import certificate7 from '../../../certificates/folder2/EPR certificate_BENZ_page-0001.jpg'
import certificate7_1 from '../../../certificates/folder2/EPR certificate_BENZ_page-0002.jpg'
import certificate7_2 from '../../../certificates/folder2/EPR certificate_BENZ_page-0003.jpg'
import certificate8 from '../../../certificates/folder3/Certificate-CTE_page-0001.jpg'
import certificate9 from '../../../certificates/folder3/Certificate-CTE_page-0002.jpg'
import certificate10 from '../../../certificates/folder3/Certificate-CTE_page-0003.jpg'
import certificate11 from '../../../certificates/folder3/Certificate-CTE_page-0004.jpg'
import { useRef } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'


const Routing = () => {
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
        <>
            <div className={styles.routing}>
                <div className={page === 'product' ? styles.active_route : styles.route} onClick={(e) => { setPage('product') }}>
                    {t("THE PRODUCT")}
                </div>
                <div className={page === 'certification' ? styles.active_route : styles.route} onClick={(e) => { setPage('certification') }}>
                    {t("CERTIFICATIONS AND REGULATIONS")}
                </div>
                <div className={page === 'application' ? styles.active_route : styles.route} onClick={(e) => { setPage('application') }}>
                    {t("APPLICATION")}
                </div>
            </div>


            <div className={styles.para}>
                {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you need it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
            </div>


            {
                page === "product" ?
                    <>
                        <FirstContainer />
                    </>
                    : page === "certification" ?
                        <>
                            <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                {t("Currently Certificate is Not  Available")}
                                {/* <div className={styles.certificate}>
                                    <div className={styles.certificateContainer} ref={certificateContainerRef}>
                                        <img src={certificate1} alt="certificate" />
                                        <img src={certificate2} alt="certificate" />
                                        <img src={certificate3} alt="certificate" />
                                        <img src={certificate4} alt="certificate" />
                                        <img src={certificate5} alt="certificate" />
                                        <img src={certificate6} alt="certificate" />
                                        <img src={certificate7} alt="certificate" />
                                        <img src={certificate7_1} alt="certificate" />
                                        <img src={certificate7_2} alt="certificate" />
                                        <img src={certificate8} alt="certificate" />
                                        <img src={certificate9} alt="certificate" />
                                        <img src={certificate10} alt="certificate" />
                                        <img src={certificate11} alt="certificate" />
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
                                </div> */}
                            </h1>
                        </>
                        : page === "application" ?
                            <>
                                <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                    {t("Currently  Application is Not Available")}
                                    {/* <div className={styles.certificate}>
                                        <img src={certificate2} alt="certificate" />
                                    </div> */}
                                </h1>
                            </>

                            :
                            <div className={styles.para}>
                                {t("No Data Found For This Particular Section.")}
                            </div>
            }


            {/* <div className={styles.download_b}>
                <div className={styles.download}>
                    Order a free consultation - our experts will select the most effective solution
                </div>
                <div className={styles.flexx_box}>
                    <input
                        type="text"
                        placeholder='Phone Number Or Email*'
                    />

                    <div className={styles.broucher}>
                        <div className={styles.download_broucher_icon}>
                            <TbDownload />
                        </div>
                        <div className={styles.download_broucher_text}>
                            Download brochure
                        </div>
                    </div>
                </div>
                <div className={styles.submit_button}>
                    Submit
                </div>
            </div> */}
        </>
    )
}

export default Routing