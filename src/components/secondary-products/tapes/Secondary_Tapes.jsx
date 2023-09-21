import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
// import [tape1, tape2, tape3] from '../../images/engine.svg'
import tape1 from '../../images/main_tapes.jpg'
// import tape2 from '../../images/main_tapes2.jpg'
// import tape3 from '../../images/main_tapes3.jpg'
import header_heading from '../../images/des_heading.svg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import greenProLogo from '../../images/new_images_client/AboutPage/green/Green Product Mark.jpeg'

const Secondary_Tapes = () => {

  const { t, i18n } = useTranslation();
  const arr = [
    {
      number: "1",
      heading: "VCI HDPE Tapes",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of VCI HDPE (Volatile Corrosion Inhibitor High-Density Polyethylene) tapes. Our VCI HDPE tapes are specifically designed to provide corrosion protection and secure packaging for various industries and applications. With their innovative VCI technology and high-density polyethylene construction, our tapes offer exceptional protection for your valuable assets.",
    },
    {
      number: "2",
      heading: "BOPP Tapes",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of high-quality BOPP (Biaxially Oriented Polypropylene) tapes. Our BOPP tapes are specifically designed to offer secure and reliable packaging solutions for various industries and applications. Our BOPP tapes are the ideal solution for all of your packaging needs because to their exceptional adhesive, strength, and versatility.",
    },
    {
      number: "3",
      heading: "Paper Tapes",
      greenProduct: "Green Product",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of environmentally friendly paper tapes. Our paper tapes are designed to offer eco-friendly and reliable packaging solutions for various industries and applications. With their biodegradable properties, strong adhesion, and versatility, our paper tapes are the perfect choice for businesses committed to sustainable packaging practices.",
    },
    {
      number: "4",
      heading: "Printed Tapes",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of high-quality printed tapes. Our printed tapes are designed to offer effective branding and enhanced security for your packaging needs. With their customizable designs, strong adhesion, and tamper-evident features, our printed tapes are the ideal choice for businesses looking to promote their brand identity and ensure package integrity.",
    },
    {
      number: "5",
      heading: "Low-VOC tapes",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of low-VOC (Volatile Organic Compound) tapes. Our low-VOC tapes are specifically designed to offer environmentally conscious packaging solutions while ensuring reliable performance. With their reduced emission of harmful chemicals, our low-VOC tapes are the ideal choice for businesses committed to sustainable and safe packaging practices.",
    },
    {
      number: "6",
      heading: "Double Sided Tape",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of high-quality double-sided tapes. Our double-sided tapes are designed to offer secure and versatile bonding solutions for a wide range of applications. With their strong adhesion, durability, and ease of use, our double-sided tapes provide reliable performance for all your bonding needs.",
    },
    {
      number: "7",
      heading: "Floor Marking Tapes",
      image: [tape1],
      content: "Welcome to BENZ Packaging, your trusted provider of high-quality floor marking tapes. Our floor marking tapes are designed to offer safety, organization, and visual guidance in various industrial and commercial settings. With their durable construction, vibrant colors, and easy application, our floor marking tapes provide reliable solutions for enhancing workplace safety and efficiency.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Tapes")}
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>
                {t(`${item.heading}`)}
                {item.greenProduct ? (
                  <div className={styles.greenrange}>
                    <img src={greenProLogo} alt="" />
                  </div>
                ) : null}
              </div>
              {/* {item?.greenProduct ? <div className={styles.auto_letter2}>
                {t(`${item?.greenProduct ?? ""}`)}
              </div> : <></>} */}
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

export default Secondary_Tapes;