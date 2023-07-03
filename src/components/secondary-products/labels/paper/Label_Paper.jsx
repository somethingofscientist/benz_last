import React from 'react'
import styles from '../first_containers/Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import bar_code_labels from '../../../images/bar_code_labels.jpeg';
import { useTranslation } from 'react-i18next';


const Label_paper = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
      {
        number: "1",
        heading: "Chromo Printed",
        image: vci_film,
        content: "Welcome to Benz Packaging, your trusted provider of vibrant and high-quality chromo printed packaging solutions. We offer a wide range of packaging products that are printed using the chromo printing technique, ensuring exceptional color reproduction and visual impact. With our chromo printed packaging, you can enhance your brand presence and create a lasting impression on your customers.At Benz Packaging, we understand the importance of eye-catching and vibrant packaging in today's competitive market. That's why we utilize the chromo printing process, known for its ability to reproduce colors with incredible accuracy and clarity. Our chromo printed packaging solutions are designed to captivate attention, promote your brand, and make a memorable impression.",
      },
      {
        number: "2",
        heading: "DT Labels",
        image: vci_film,
        content: "Welcome to Benz Packaging, your trusted provider of dynamic and eye-catching DT labels. Our DT labels, also known as digital transfer labels, offer a versatile and visually appealing solution for your branding needs. With their exceptional print quality and customization options, our DT labels help elevate your brand and capture the attention of your target audience.At Benz Packaging, we understand the importance of impactful branding in today's competitive market. That's why we offer a comprehensive range of DT labels that are known for their vibrant colors, sharp details, and superior adhesion. Whether you need labels for product packaging, promotional materials, or any other application, our DT labels are the perfect choice.",
      },
      {
        number: "3",
        heading: "Barcode Labels",
        image: bar_code_labels,
        content: "Welcome to Benz Packaging, your trusted provider of accurate and reliable barcode labels. Our barcode labels are designed to facilitate efficient product tracking, inventory management, and supply chain operations. With their high-quality printing and scanning capabilities, our barcode labels ensure seamless and error-free barcode scanning, enabling you to streamline your business processes.At Benz Packaging, we understand the critical role that barcode labels play in today's fast-paced business environment. That's why we offer a comprehensive range of barcode labels that are known for their clarity, durability, and scannability. Whether you need labels for retail products, warehouse management, or any other application, our barcode labels are the perfect choice.",
      },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Label Paper")}
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

export default Label_paper;