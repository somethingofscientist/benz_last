import React from 'react'
import styles from './FAQ.module.css'
import AccordianItem from './AccordianItem';
import avatar from '../../images/Avatar group.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const FAQ = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.faq} id='rest1'>
                <div className={styles.faq_heading} >
                    Frequently asked questions
                </div>
                <div className={styles.faq_subheading} >
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
                        content="Most VCI products have a shelf life of up to two years when the product is stored in an external bag or box, out of direct sunlight and under shelter."
                    />
                    <AccordianItem
                        title="What is the in-service or useful life of VCI Products?"
                        content="Most VCI products have an in-service life of up to five years when protecting clean metal surfaces and when used as recommended by our representatives."
                    />
                    <AccordianItem
                        title="Can Your VCI Bags Be Reused?"
                        content="Yes, if the bags are still in good condition without holes or tears. Bags that have an excessive number of holes or tears, have large holes or tears, or have begun to crack or lose strength due to excessive exposure to direct sunlight will not provide adequate corrosion protection and should not be reused."
                    />
                    <AccordianItem
                        title="What if I have a rip in my VCI bag? What should I do?"
                        content="If the rip is small, you can cover the rip or hole with a high quality piece of tape that is designed to adhere to “low energy” surfaces like polyethylene. Or, you can fold over and staple the area shut and then seal over the holes made by the staples with the recommended tape. If you have a large rip that you cannot close easily with tape or staples, you should replace the bag with a new one. The best seal is always a “heat seal”."
                    />
                    <AccordianItem
                        title="Can I use my VCI bag in conjunction with oil coatings?"
                        content="A light oil coating on the metal part is fine to use with a VCI bag. A heavy oil coating may affect the performance of the BENZ VCI bag by keeping the corrosion inhibiting vapor molecules from reaching the metal surface. Please contact us to determine the suitability of the oil and application."
                    />
                    <AccordianItem
                        title="How do I know which of your products to use for my type of metal?"
                        content="Ferrous, Non Ferrous & Multimetal: Iron, steel, cast iron, Aluminum (and aluminum alloys containing copper and/or manganese), copper, brass, bronze and fully galvanized steel are protected using blue or clear VCI Protective Packaging. Although VCI products are usually sold in Blue / Clear standard colors but we are also able to custom produce VCI films in any color of your choice."
                    />
                    <AccordianItem
                        title="Can used VCI films be recycled?"
                        content="Yes. VCI films made of polyethylene and polypropylene have been recycled for years. VCI products, themselves, are produced using only virgin materials to assure a high level of quality and consistency for our customers."
                    />
                    <AccordianItem
                        title="How do I know that I am measuring length, width and height correctly?"
                        content="For Flat Bag, Sheet, Sleeve, and Round Bottom Bags Width is measured from edge to edge. If it is a slit seal bag, measure inside seal to inside seal or inside seal to fold. Bag length is measured from top of bag to top of bottom seal or fold. Sleeve or sheet length is measured from cut edge to cut edge."
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
                <Link to="/contact_page">
                    <div className={styles.faq_getintouch}>Get In Touch</div>
                </Link>
            </div>
        </>
    )
}

export default FAQ




