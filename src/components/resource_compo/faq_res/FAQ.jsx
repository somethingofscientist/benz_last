import React from 'react'
import styles from './FAQ.module.css'
import AccordianItem from './AccordianItem';
import avatar from '../../images/Avatar group.svg'

const FAQ = () => {


    return (
        <>
            <div className={styles.faq} id='section5'>
                <div className={styles.faq_heading}>
                    Frequently asked questions
                </div>
                <div className={styles.faq_subheading}>
                    Everything you need to know about the product and billing.
                </div>

                {/* faq */}

                <div className={styles.faq_section}>
                    <AccordianItem
                        title="What is the difference between shelf-life and in-service life?"
                        content="The shelf life is the duration of time that unused VCI products can be stored prior to use without losing their effectiveness. The in-service life is the duration of time that VCI products will protect clean metal objects from corrosion if used properly."
                    />
                    <AccordianItem
                        title="What is the shelf life of VCI Products?"
                        content="Answer 2"
                    />
                    <AccordianItem
                        title="What is the in-service or useful life of VCI Products?"
                        content="Answer 2"
                    />
                    <AccordianItem
                        title="What is VCI and VCI Film?"
                        content="Answer 2"
                    />
                    <AccordianItem
                        title="What can be anticipated when wet parts are packaged in VCI Products?"
                        content="Answer 2"
                    />
                    <AccordianItem
                        title="What is the shelf life of VCI Products?"
                        content="Answer 2"
                    />
                    <AccordianItem
                        title="Does VCI have any effect on Electrical or Electronic components?"
                        content="Answer 2"
                    />
                </div>
                {/* faq ends */}


                {/* image section */}
                <div className={styles.faq_grey_container}>
                    <div className={styles.faq_image_section}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={styles.faq_stillhavequestion}>Still have questions?</div>
                    <div className={styles.faq_lastline}>
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </div>
                </div>
                <div className={styles.faq_getintouch}>Get In Touch</div>
            </div>
        </>
    )
}

export default FAQ




