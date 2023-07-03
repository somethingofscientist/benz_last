import React from 'react'
import styles from '../first_containers/Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import wooden_pallets from '../../../images/wooden_pallets.jpeg';
import wooden_pallets2 from '../../../images/wooden_pallets2.jpeg';
import wooden_pallets3 from '../../../images/wooden_pallets3.jpeg';
import wooden_pallets4 from '../../../images/wooden_pallets4.jpeg';
import pine_wood from '../../../images/pine_wood.jpeg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Wooden_box = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Ply wood Boxes",
      image: vci_film,
      content: "When it comes to packaging, durability and versatility are key factors to consider. Benz Packaging offers a range of plywood boxes that combine strength, reliability, and adaptability. In this blog post, we will explore the benefits and applications of Benz Packaging's plywood boxes, showcasing why they are an excellent choice for various industries.",
    },
    {
      number: "2",
      heading: "Nailess Boxes",
      image: vci_film,
      content: "Nailess boxes from Benz Packaging eliminate the need for nails or fasteners during assembly. Discuss how these boxes are ingeniously designed to interlock and secure without the use of additional tools or hardware. This feature simplifies the packaging process, saving time and effort for businesses.",
    },
    {
      number: "3",
      heading: "wooden pallets",
      image: [wooden_pallets, wooden_pallets2, wooden_pallets3, wooden_pallets4],
      content: "When it comes to material handling and transportation, wooden pallets play a vital role in ensuring efficiency and safety. Benz Packaging offers a range of wooden pallets designed to meet the diverse needs of industries. In this blog post, we will explore the benefits and features of Benz Packaging's wooden pallets, highlighting how they contribute to streamlined operations and secure product handling.",
    },
    {
      number: "4",
      heading: "Pine Wood boxes",
      image: pine_wood,
      content: "When it comes to packaging, the choice of material can significantly impact the overall aesthetics and functionality. Benz Packaging offers pine wood boxes that combine timeless elegance with reliable packaging solutions. In this blog post, we will explore the features and benefits of Benz Packaging's pine wood boxes, highlighting their natural beauty, versatility, and durability.",
    },
    {
      number: "5",
      heading: "Jungle wood boxes",
      image: vci_film,
      content: "In the world of packaging, choosing unique and sustainable materials can make a significant impact. Benz Packaging offers jungle wood boxes that bring a touch of exotic beauty and eco-consciousness to your packaging solutions. In this blog post, we will explore the features and benefits of Benz Packaging's jungle wood boxes, highlighting their distinctiveness, sustainability, and reliability.",
    },

  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Wooden Box")}
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>
                {t(`${item.heading}`)}
               </div>
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

export default Wooden_box;