import React from 'react'
import styles from '../../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../../images/engine.svg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Secondary_export = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            heading: "Export Packaging",
            image: vci_film,
            content: "When it comes to exporting your products to global markets, ensuring their safety and integrity during transit is crucial. BENZ Packaging specializes in export packaging solutions that are designed to meet the unique challenges of international shipment. With our expertise in packaging and knowledge of export regulations, we provide reliable and effective packaging solutions that protect your products throughout their journey.We understand that each product has distinct packaging requirements. Our team works closely with you to assess your specific needs and develop customized packaging solutions tailored to your products. We consider factors such as product dimensions, fragility, weight, and mode of transportation to create packaging that offers maximum protection and efficiency.",
        },
        {
            number: "2",
            heading: "Machine Packaging",
            image: vci_film,
            content: "In today's fast-paced industrial environment, optimizing packaging processes is essential to meet high production demands and ensure product quality. BENZ Packaging specializes in machine packaging solutions that streamline and automate the packaging process, offering efficiency, speed, and consistency. With our expertise in packaging machinery and innovative technologies, we provide reliable and tailored solutions to meet your specific packaging requirements. We understand that every product and packaging operation is unique. Our team works closely with you to analyze your packaging needs and develop customized machine packaging solutions. We consider factors such as product dimensions, packaging materials, throughput requirements, and automation level to design a system that integrates seamlessly into your production line.",
        },
        {
            number: "3",
            heading: "On Site Packaging",
            image: vci_film,
            content: "At BENZ Packaging, we understand that certain situations require packaging solutions to be brought directly to your location. That's why we offer on-site packaging services, bringing our expertise, equipment, and materials directly to your facility. Our on-site packaging services are designed to provide you with convenience, efficiency, and professional packaging solutions tailored to your specific needs. Our experienced packaging professionals work closely with you to understand your packaging needs and develop customized solutions. We take into account factors such as product specifications, fragility, transportation requirements, and any specific packaging regulations or standards. By tailoring our packaging services to your unique requirements, we ensure that your products are properly protected during storage and transportation.",
        },
        {
            number: "4",
            heading: "Long Term Packaging",
            image: vci_film,
            content: "At BENZ Packaging, we understand that some products require long-term packaging solutions to ensure their protection and integrity over extended periods. That's why we offer specialized long-term packaging services designed to meet the unique requirements of products that will be stored or transported for extended durations. With our expertise, quality materials, and attention to detail, we provide reliable and durable packaging solutions for your long-term needs. Our long-term packaging solutions are designed to provide comprehensive protection for your products during storage and transportation. We carefully assess the specific characteristics of your goods, such as fragility, sensitivity to environmental factors, and susceptibility to corrosion or damage. Based on this assessment, we select suitable packaging materials and techniques to safeguard your products throughout their extended lifecycle.",
        },
    ]
    return (
        <>
            <div className={styles.header_bg}>
                <img src={header_heading} alt="" />
                <div className={styles.imageContainer}></div>
                <div className={styles.header}>
                    {t("Sea Worthy Packaging")}
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

export default Secondary_export;