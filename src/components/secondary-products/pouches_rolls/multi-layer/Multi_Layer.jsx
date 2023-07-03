import React from 'react'
import styles from '../../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../../images/engine.svg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Multi_Layer = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Mono Layer Pouches",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of mono layer pouches for simple and efficient packaging solutions. Our mono layer pouches offer a straightforward and practical packaging option known for its simplicity, cost-effectiveness, and convenience. With their versatility and ease of use, our mono layer pouches are an ideal choice for various industries and applications.",
    },
    {
      number: "2",
      heading: "Co-Extruded Laminate Pouches",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of co-extruded laminate pouches for enhanced packaging solutions. Our co-extruded laminate pouches offer advanced features and superior performance, ensuring optimal product protection, freshness, and convenience. With their innovative construction and versatile properties, our co-extruded laminate pouches are an ideal choice for various industries and applications.",
    },
    {
      number: "3",
      heading: "Foil Laminates",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of foil laminates for premium packaging solutions. Our foil laminates offer a high-quality and visually appealing packaging option known for its excellent barrier properties, durability, and luxurious finish. With their versatility and versatility, our foil laminates are an ideal choice for various industries and applications.",
    },
    {
        number: "4",
        heading: "Custom Engineered Laminates",
        image: vci_film,
        content: "Welcome to Benz Packaging, your trusted provider of custom engineered laminates for tailored packaging solutions. Our custom laminates offer a specialized packaging option designed to meet your specific requirements, ensuring optimal product protection, functionality, and visual appeal. With our expertise in laminate engineering, we can create unique solutions that address your unique packaging challenges.",
      },
      {
        number: "5",
        heading: "Adhesive Laminate Pouches",
        image: vci_film,
        content: "Welcome to Benz Packaging, your trusted provider of adhesive laminate pouches for secure and convenient packaging solutions. Our adhesive laminate pouches combine the benefits of laminate materials with the convenience of adhesive closures, offering a reliable and user-friendly packaging option for various industries and applications.",
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

export default Multi_Layer;