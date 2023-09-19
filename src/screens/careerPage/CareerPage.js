import React, { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styles from './CareerPage.module.css';
import ProductHeading from '../productsPages/heading/Heading';
import HeadingCareer from '../../components/contactPage/heading_header copy/Heading';



const CareerPage = () => {
    const signatureCanvasRef = useRef(null);

    const handleClear = () => {
        // Clear the signature canvas
        signatureCanvasRef.current.clear();
    };

    const handleSave = () => {
        // Get the signature data as an image URL
        const signatureDataURL = signatureCanvasRef.current.toDataURL();
        // You can now save or process the signatureDataURL as needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted')
    }


    return (
        <>
            <HeadingCareer />
            <div className={styles.career_container}>

                <div className={styles.left}>
                    <div className={styles.jobDesc}>
                        <div className={styles.jobTitleMain}>
                            <h1>Business Development Manager</h1>
                        </div>
                        <div className={styles.jobTitle}>
                            We are seeking an accomplished and visionary leader to join us as a global business development manager. In this strategic and senior role, you will be responsible for leading key geographies and business segments, driving demand generation and qualification of new opportunities, and exceeding team quotas. You will work closely with Sales and Marketing management to develop and execute well-targeted strategies and lead nurturing plans, as well as drive pipeline generation to achieve the company's growth goals.
                            The position will report to the VP of the company
                        </div>
                        <div className={styles.jobResponsibility}>
                            <ul>
                                <li>
                                    Develop and implement innovative strategies and lead nurturing plans to drive business growth throughout the year.
                                </li>
                                <li>
                                    Collaborate with Sales and marketing management to develop and grow the opportunity pipeline in target regions worldwide.
                                </li>
                                <li>
                                    Ensure that the company achieves its ambitious growth targets by driving qualified lead generation for all Sales Regions.
                                </li>
                                <li>
                                    Work closely with Marketing and sales teams to develop and execute effective prospecting and communication strategies, including call pitches, social media outreach, and other Sales 2.0 technologies.
                                </li>
                                <li>
                                    Utilize best-in-class tools and technologies to continuously improve business development productivity and performance.
                                </li>
                                <li>
                                    Manage data for new and prospective clients in Salesforce CRM, ensuring accuracy, logging of all communications, and attachment of necessary documents.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.jobSkills}>
                            <ul>
                                <li>
                                    Minimum of 10+ years of experience as a business development manager in a relevant industry.
                                </li>
                                <li>
                                    Creative problem solver with an ability to thrive in a competitive, and dynamic business environment.
                                </li>
                                <li>
                                    Strong understanding of business practices and industry trends, with a strategic mindset.
                                </li>
                                <li>
                                    Excellent communication and marketing skills.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={styles.right}>
                    <h1>Submit Your Resume</h1>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.form_group}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                pattern="^[A-Za-z]+$"
                                title="Please enter a valid first name"
                                placeholder="Applicant's First Name"
                                required
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Applicant's Last Name"
                                pattern="^[A-Za-z]+$"
                                title="Please enter a valid last name"
                                required
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                pattern="^[0-9]+$" // Use this regex pattern for numbers only
                                title="Please enter a valid phone number"
                                minLength={10}
                                maxLength={10}
                                required
                            />
                        </div>

                        <div className={styles.form_group}>
                            <label htmlFor="address1">Address 1</label>
                            <input
                                type="text"
                                id="address1"
                                placeholder="Address Line 1"
                                required
                            />
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="address2">Address 2</label>
                            <input
                                type="text"
                                id="address2"
                                placeholder="Address Line 2"
                            />
                        </div>


                        <div className={styles.form_group}>
                            <label htmlFor="resume">Upload Resume
                                <span style={{ fontWeight: "normal" }}>
                                     ( .pdf, .doc, .docx)
                                </span>
                            </label>
                            <input
                                type="file"
                                id="resume"
                                accept=".pdf, .doc, .docx" // Specify the allowed file types
                                required
                            />
                        </div>


                        <button type="submit" className={styles.submit_button}>
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default CareerPage