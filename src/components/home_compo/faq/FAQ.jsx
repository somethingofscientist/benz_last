import React from 'react'
import styles from './FAQ.module.css'
import AccordianItem from './AccordianItem';
import avatar from '../../images/Avatar group.svg'
import { Link } from 'react-router-dom';



const FAQ = () => {
    return (
        <>
            <div className={styles.faq}>
                <div className={styles.faq_heading}>
                    Frequently asked questions
                </div>
                <div className={styles.faq_subheading}>
                    Everything you need to know about the product and billing.
                </div>

                {/* faq */}

                <div className={styles.faq_section}>
                    <AccordianItem
                        title="How does keeping cleaning solutions and metalworking fluids clean prevent corrosion?"
                        content="By eliminating small metal particles (dirt or dwarf) and ensuring proper washing, galvanic corrosion and rust formation underneath the particles can be prevented."
                    />
                    <AccordianItem
                        title="Why is maintaining the pH of cleaning solutions important for corrosion protection?"
                        content="Maintaining a pH of at least 9.0 protects ferrous metals from corrosion, while a pH of 7-7.5 is suitable for non-ferrous metals like brass and bronze. Improperly washed parts can lead to galvanic corrosion and rust formation."
                    />
                    <AccordianItem
                        title="Why should I switch to deionized or distilled water in cutting or cleaning fluids?"
                        content="Deionized or distilled water helps prevent contaminants that can contribute to corrosion, ensuring better protection for metal parts."
                    />
                    <AccordianItem
                        title="What is the recommended method for drying metal parts after cleaning?"
                        content="Placing the parts in a wire basket allows for effective drying, preventing corrosion caused by vibratory action or forced air. It is important not to stack the parts until they are completely dry to avoid galvanic corrosion."
                    />
                    <AccordianItem
                        title="How can I protect metal parts from industrial air contaminants and heat treatment byproducts?"
                        content="To protect against industrial air contaminants and heat treatment byproducts, cover the metal parts with BENZ Packaging VCI paper or VCI poly bags. These protective materials shield the parts from oxygen and contaminants."
                    />
                    <AccordianItem
                        title="How do temperature and humidity fluctuations impact corrosion?"
                        content="Fluctuations in temperature and humidity, even by 10ºC, can cause condensation, accelerating the corrosion process. Maintaining consistent temperature and humidity levels is crucial for corrosion prevention."
                    />
                    <AccordianItem
                        title="What measures can I take to maintain lower temperatures and humidity levels?"
                        content="Installing climate controls, air conditioning, and dehumidifiers can help maintain lower temperatures and humidity levels. Additionally, using VCI bags or VCI paper to enclose metal parts quickly provides an extra layer of protection."
                    />
                    <AccordianItem
                        title="Why is it important to create a barrier between metal parts and wood or corrugated boxes?"
                        content="Direct contact between metal parts and wood or corrugated boxes can lead to galvanic corrosion. Using a VCI poly bag or VCI paper to line the boxes creates a protective barrier, preventing corrosion."
                    />
                    <AccordianItem
                        title="How should I use VCI products effectively?"
                        content="It is crucial to follow the manufacturer's instructions when using VCI products. Consulting with experts like BENZ Packaging can help design a VCI system tailored to your application, ensuring proper usage and optimal corrosion protection."
                    />
                    {/* new ones */}
                    <AccordianItem
                        title="How long can metal parts remain corrosion-free when packaged with BENZ Packaging VCI Paper or VCI Poly bags?"
                        content="When properly packaged with BENZ Packaging VCI Paper or VCI Poly bags, metal parts can stay corrosion-free for years, ensuring their long-term protection."
                    />
                    <AccordianItem
                        title="What sealing options are available for maintaining packaging integrity?"
                        content="BENZ Packaging offers various sealing options, including heat sealing and zip-lock closures, to ensure airtight packaging and prevent the ingress of moisture, oxygen, and contaminants."
                    />
                    <AccordianItem
                        title="Can BENZ Packaging provide custom packaging solutions?"
                        content="Yes, BENZ Packaging offers custom packaging solutions tailored to different types of metal parts. This includes specialized shapes, sizes, and materials designed to provide optimal protection during storage and transportation."
                    />
                    <AccordianItem
                        title="How can I assess the condition of packaged metal parts for corrosion?"
                        content="Regular inspections of packaged metal parts can help identify any signs of corrosion or damage. Implementing a quality control process ensures that packaging materials and methods effectively preserve the parts' condition."
                    />
                    <AccordianItem
                        title="Does BENZ Packaging offer eco-friendly packaging options?"
                        content="Yes, BENZ Packaging provides eco-friendly packaging solutions, such as recyclable and biodegradable materials, to support sustainable packaging practices."
                    />
                    <AccordianItem
                        title="How important is labeling on packaging?"
                        content="Proper labeling on packaging provides essential information, including part identification, handling instructions, and storage conditions. Clear and visible labeling ensures correct handling and prevents potential damage during transportation and storage."
                    />
                    <AccordianItem
                        title="Is employee training available for proper packaging procedures?"
                        content="Yes, BENZ Packaging can provide training and educational resources to help train employees on proper packaging procedures, ensuring consistency and quality."
                    />
                    <AccordianItem
                        title="Can BENZ Packaging assist in reviewing and optimizing packaging strategies?"
                        content="Yes, BENZ Packaging offers guidance and support in reviewing and enhancing packaging processes to maximize protection for metal parts. Regular assessments help identify areas for improvement and optimize packaging performance."
                    />
                    <AccordianItem
                        title="How can I provide additional protection against mechanical damage during transportation?"
                        content="Using cushioning materials such as foam inserts or bubble wrap provides additional protection against impact during handling and transportation, reducing the risk of mechanical damage to metal parts."
                    />
                    <AccordianItem
                        title="What should I consider when selecting packaging materials for long-term storage and transportation?"
                        content="When considering the duration of storage and transportation, BENZ Packaging can recommend packaging solutions with extended corrosion protection capabilities, ensuring the parts remain corrosion-free for longer periods."
                    />
                    <AccordianItem
                        title="How should I manage the inventory of packaged metal parts?"
                        content="Proper inventory management and rotation are essential to prevent prolonged storage of metal parts. Regularly checking and using the oldest packaged parts first minimizes the risk of corrosion due to extended storage periods."
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




