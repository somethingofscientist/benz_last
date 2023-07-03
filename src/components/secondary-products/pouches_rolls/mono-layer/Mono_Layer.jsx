import React from 'react'
import styles from '../../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../../images/engine.svg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Mono_Layer = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "LDPE Pouches",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of LDPE pouches for flexible and durable packaging solutions. Our LDPE (Low-Density Polyethylene) pouches offer a versatile packaging option that combines flexibility, durability, and excellent product protection. With their wide range of applications and reliability, our LDPE pouches are an ideal choice for various industries.",
    },
    {
      number: "2",
      heading: "PP Pouches",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of PP pouches for reliable and secure packaging solutions. Our PP (Polypropylene) pouches offer a versatile and robust packaging option known for their durability, strength, and excellent product protection. With their wide range of applications and reliability, our PP pouches are an ideal choice for various industries.",
    },
    {
      number: "3",
      heading: "HDPE Pouches",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of HDPE pouches for secure and sustainable packaging solutions. Our HDPE (High-Density Polyethylene) pouches offer a versatile and eco-friendly packaging option known for their strength, durability, and excellent product protection. With their wide range of applications and sustainability benefits, our HDPE pouches are an ideal choice for various industries.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Pouches And Rolls")}
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

export default Mono_Layer;