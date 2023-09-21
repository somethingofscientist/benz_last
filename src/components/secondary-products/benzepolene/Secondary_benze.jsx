import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Secondary_benzepolene = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Woven Tarpaulins",
      image: vci_film,
      content: "Welcome to BENZ Packaging, your trusted provider of high-quality woven tarpaulins. Our woven tarpaulins are designed to offer durable and versatile protection for a wide range of outdoor applications. With BENZ Packaging, you can trust that your valuable assets and goods will be shielded from the elements and kept secure.",
    },
    {
      number: "2",
      heading: "Cross Laminated Tarpaulin",
      image: vci_film,
      content: "Welcome to BENZ Packaging, your reliable source for high-quality cross laminated tarpaulins. Our cross laminated tarpaulins are engineered to provide superior strength, durability, and protection for heavy-duty applications. Whether you need to cover construction sites, transport goods, or secure outdoor spaces, our tarpaulins offer reliable and long-lasting performance.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("BENZpolene")}
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

export default Secondary_benzepolene;