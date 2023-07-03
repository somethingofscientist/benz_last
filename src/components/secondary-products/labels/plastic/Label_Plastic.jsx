import React from 'react'
import styles from '../../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../../images/engine.svg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Label_Plastic = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "PP Clear Labels",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality PP clear labels. Our PP clear labels are specifically designed to offer transparent and professional branding solutions for your products and packaging. With their exceptional clarity, durability, and customization options, our PP clear labels provide a superior labeling solution to showcase your brand identity.",
    },
    {
      number: "2",
      heading: "Pearls PET Labels",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality pearlescent PET labels. Our pearlescent PET labels are specifically designed to offer elegant and eye-catching branding solutions for your products and packaging. With their unique pearlescent finish, durability, and customization options, our PET labels provide a superior labeling solution that adds a touch of sophistication to your brand.",
    },
    {
      number: "3",
      heading: "PVC Labels",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality PVC labels. Our PVC labels are specifically designed to offer durable and vibrant branding solutions for your products and packaging. With their exceptional durability, flexibility, and customization options, our PVC labels provide a superior labeling solution that enhances the visual impact of your brand.",
    },
    {
        number: "4",
        heading: "Foil Labels",
        image: vci_film,
        content: "Welcome to Benz Packaging, your trusted provider of premium foil labels. Our foil labels are specifically designed to offer luxurious and eye-catching branding solutions for your products and packaging. With their exquisite metallic finish, durability, and customization options, our foil labels provide a superior labeling solution that adds a touch of elegance to your brand.",
      },

  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Label Plastic")}
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

export default Label_Plastic;