import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Secondary_others = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Ice Pack Gels",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of ice pack gels for reliable temperature control solutions. Our ice pack gels are designed to help maintain the desired temperature during the transportation and storage of temperature-sensitive products, ensuring their freshness and integrity.Temperature control is critical for various industries, including food and beverage, pharmaceuticals, and healthcare. At Benz Packaging, we understand the importance of preserving the quality and efficacy of your temperature-sensitive products, and our ice pack gels offer an effective solution to keep them within the required temperature range.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Others")} 
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

export default Secondary_others;