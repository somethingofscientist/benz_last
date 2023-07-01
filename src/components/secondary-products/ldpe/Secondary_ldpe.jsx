import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';
import eco_bio from '../../images/eco-bio.jpeg';
import eco_bio2 from '../../images/eco_bio2.jpg';
import eco_bio3 from '../../images/eco_bio3.jpg';
import zip_lock1 from '../../images/zip_lock1.jpg';
import zip_lock2 from '../../images/zip_lock2.jpeg';
import esd_bags1 from '../../images/esd_bags1.jpg';
import esd_bags2 from '../../images/esd_bags2.jpg';

import bag_roll1 from '../../images/bag_on_roll1.jpg';
import bag_roll2 from '../../images/bag_on_roll2.jpg';
import bag_roll3 from '../../images/bag_on_roll3.jpg';
import bag_roll4 from '../../images/bag_on_roll4.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Secondary_ldpe = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Printed LD Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "2",
      heading: "Plain LD Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "3",
      heading: "Bags on Roll",
      image: [bag_roll1, bag_roll2, bag_roll3, bag_roll4],
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "4",
      heading: "Perforated Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "5",
      heading: "Perforated Bags on Roll",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "6",
      heading: "Pre Open bags on Roll",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "7",
      heading: "Pallet Covers",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "8",
      heading: "Stretch Films",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "9",
      heading: "Engine Covers",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "10",
      heading: "Garbage Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "11",
      heading: "Zip Lock Bags",
      image: [zip_lock1, zip_lock2],
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "12",
      heading: "Bio Degradable Bags",
      image: [eco_bio, eco_bio2, eco_bio3],
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "13",
      heading: "Compostable Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "14",
      heading: "Mailer Bags",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "15",
      heading: "Anti Static ESD Bags",
      image: [esd_bags1, esd_bags2],
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          LDPE
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>{item.heading} </div>
            </div>

            <div className={styles.auto_img_container}>
              <div className={styles.auto_img}>
                <Carousel
                  autoPlay={true}
                  interval={2000}
                  infiniteLoop
                  showStatus={false}
                  showThumbs={false}
                  showArrows={false}
                >
                  {Array.isArray(item.image) ? (
                    item.image.map((imagePath, idx) => (
                      <div className={styles.images} key={idx}>
                        <img src={imagePath} alt={item.heading} />
                      </div>
                    ))
                  ) : (
                    <div className={styles.images}>
                      <img src={item.image} alt={item.heading} />
                    </div>
                  )}
                </Carousel>
                {/* <img src={item.image} alt="engine" /> */}

                {/* <Link to={item.page_link}>
                    <div className={styles.auto_pack}>
                      Pack With Us
                    </div>
                  </Link> */}
              </div>
              <div className={styles.auto_img_text}>{item.content}</div>
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

export default Secondary_ldpe;