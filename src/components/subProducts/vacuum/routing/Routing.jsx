import React, { useState } from 'react'
import styles from './Routing.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstContainer from '../first_containers/FirstContainer_Des_Pack'
import { TbDownload } from 'react-icons/tb';


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
                    </>
                    : page === "certification" ?
                        <>
                            <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                Currently Certificate is Not  Available
                            </h1>
                        </>
                        : page === "application" ?
                            <>
                                <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                    Currently  Application is Not Available
                                </h1>
                            </>

                            :
                            <div className={styles.para}>
                                No Data Found For This Particular Section.
                            </div>
            }
        </>
    )
}

export default Routing