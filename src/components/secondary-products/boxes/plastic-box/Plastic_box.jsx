import React from 'react'
import styles from '../first_containers/Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import foldable from '../../../images/foldable.jpg';
import { useTranslation } from 'react-i18next';


const Plastic_box = () => {
  
  const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            heading: "PP Bins",
            image: vci_film,
            content: "Welcome to Benz Packaging, your premier source for high-quality PP (Polypropylene) bins. Our PP bins are designed to provide efficient storage and organization solutions for various industries and applications. With their durability, versatility, and practicality, our PP bins are the perfect choice for optimizing your storage space.",
        },
        {
            number: "2",
            heading: "Plastic Crates",
            image: vci_film,
            content: "At Benz Packaging, we understand the importance of reliable and durable storage solutions. That's why we offer a comprehensive range of plastic crates that are specifically designed to meet your unique storage needs. Made from robust and resilient plastic materials, our crates provide exceptional strength and protection for your goods, ensuring they remain intact during storage and transit.",
        },
        {
            number: "3",
            heading: "Foldable Bins",
            image: foldable,
            content: "At Benz Packaging, we understand the importance of efficient storage and transportation in businesses. That's why we offer a comprehensive range of foldable bins that are specifically designed to meet your unique needs. Made from high-quality materials, our foldable bins offer exceptional strength and stability when in use, and they can be conveniently folded down when not in use, saving valuable space.",
        },
    ]
    return (
        <>
        <div className={styles.header_bg}>
          <img src={header_heading} alt="" />
          <div className={styles.imageContainer}></div>
          <div className={styles.header}>
            {t("Plastic Box")}
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
                  <img src={item.image} alt="engine" />
  
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

export default Plastic_box;