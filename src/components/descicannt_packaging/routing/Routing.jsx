import React, { useState } from 'react'
import styles from './Routing.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Descicannt from '../third_container/ThirdContainer_Des_Pack'
import FirstContainer from '../first_containers/FirstContainer_Des_Pack'
import SecondContainer from '../sec_container/SecondContainer_Des_Pack'
import ThirdContainer from '../third_container/ThirdContainer_Des_Pack'
import FourthContainer from '../fourth_container/FourthContainer_Des_Pack'
import {TbDownload} from 'react-icons/tb';


const Routing = () => {
    const [page, setPage] = useState("product");


    return (
        <>
            <div className={styles.routing}>
                <div className={page === 'product' ? styles.active_route : styles.route} onClick={(e) => { setPage('product') }}>
                    THE PRODUCT
                </div>
                <div className={page === 'certification' ? styles.active_route : styles.route} onClick={(e) => { setPage('certification') }}>
                    CERTIFICATIONS AND REGULATIONS
                </div>
                <div className={page === 'application' ? styles.active_route : styles.route} onClick={(e) => { setPage('application') }}>
                    APPLICATION
                </div>
            </div>


            <div className={styles.para}>
                BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you need it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.
            </div>


            {
                page === "product" ?
                    <>
                        <FirstContainer />
                        <SecondContainer />
                        <ThirdContainer />
                        <FourthContainer />
                    </>
                    : page === "certification" ?
                        <>
                            <FirstContainer />
                            <SecondContainer />
                            <ThirdContainer />
                            <FourthContainer />
                        </>
                        : page === "application" ?
                            <>
                                <FirstContainer />
                                <SecondContainer />
                                <ThirdContainer />
                                <FourthContainer />
                            </>

                            :
                            <div className={styles.para}>
                                No Data Found For This Particular Section.
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