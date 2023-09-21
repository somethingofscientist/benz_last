import React from 'react'
import styles from '../first_containers/Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import paper_comb from '../../../images/paper_comb.jpg';
import honey_comb1 from '../../../images/honey_comb1.jpg';
import honey_comb2 from '../../../images/honey_comb2.jpg';
import honey_comb3 from '../../../images/honey_comb3.JPG';

import greenProLogo from '../../../images/new_images_client/AboutPage/green/Green Product Mark.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Paper_box = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "5 Ply Corrugated Boxes",
      image: vci_film,
      greenProduct: "Green Product",
      content: "When it comes to packaging, strength, durability, and versatility are essential factors to consider. BENZ Packaging offers 5 ply corrugated boxes that provide reliable protection and adaptability for a wide range of products. In this blog post, we will explore the features and benefits of BENZ Packaging's 5 ply corrugated boxes, highlighting their robust construction, versatility, and ability to meet diverse packaging needs.",
    },
    {
      number: "2",
      heading: "Duplex Mono-Carton",
      image: vci_film,
      greenProduct: "Green Product",
      content: "When it comes to packaging, strength, and visual appeal play a crucial role in attracting customers and protecting your products. BENZ Packaging offers Duplex Mono-Carton solutions that combine superior strength with eye-catching aesthetics. In this blog post, we will explore the features and benefits of BENZ Packaging's Duplex Mono-Carton, highlighting its durability, customization options, and ability to enhance the presentation of your products.",
    },
    {
      number: "3",
      heading: "3 Ply Corrugated Box",
      image: vci_film,
      greenProduct: "Green Product",
      content: "At BENZ Packaging, we understand that every business has unique requirements when it comes to packaging. That's why we offer customization options for our 3 Ply Corrugated Box. You can choose from a range of sizes, dimensions, and print designs to suit your specific needs. Whether you require boxes for small items, delicate electronics, or bulky goods, we can tailor our 3 Ply Corrugated Box to meet your exact specifications.",
    },
    {
      number: "4",
      heading: "Honeycomb Boxes",
      greenProduct: "Green Product",
      image: [honey_comb1, honey_comb2, honey_comb3],
      content: "At BENZ Packaging, we understand that each business has specific packaging requirements. That's why our Honeycomb Boxes can be customized to meet your individual needs. You can choose from various sizes, shapes, and configurations to ensure a perfect fit for your products. Whether you need boxes for electronics, glassware, or other delicate items, our Honeycomb Boxes can be tailored to your exact specifications.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Paper Box")}
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
              <div className={styles.auto_img_text}>
                {t(`${item.content}`)}
              </div>
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

export default Paper_box;