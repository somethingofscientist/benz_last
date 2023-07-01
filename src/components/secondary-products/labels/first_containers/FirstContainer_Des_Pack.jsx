import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Labels_Secondary = () => {
  
  const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            page_link: "/secondary-label-plastic",
            heading: "Plastic ",
            image: vci_film,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "PP Clear Labels",
                    item_text: "Benz Packaging - VCI Bio-Film: Environmentally Friendly Corrosion Protection",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Pearls PET Labels",
                    item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "PVC Labels",
                    item_text: "Benz Packaging - VCI Stretch Film: Advanced Corrosion Protection with Stretchability",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Foil Labels",
                    item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2",
            page_link: "/secondary-label-paper",
            heading: "Paper ",
            image: vci_film,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Chromo Printed",
                    item_text: "Benz Packaging - VCI Bio-Film: Environmentally Friendly Corrosion Protection",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "DT Labels",
                    item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Barcode Labels",
                    item_text: "Benz Packaging - VCI Stretch Film: Advanced Corrosion Protection with Stretchability",
                    date: "8 June 2023"
                },
            ]
        },
    ]
    return (
        <>
        <div className={styles.header_bg}>
          <img src={header_heading} alt="" />
          <div className={styles.imageContainer}></div>
          <div className={styles.header}>
            Labels
          </div>
        </div>
        {
          arr.map((item) => (
            <div className={styles.automobile_container} id='section3'>
              <div className={styles.auto_heading}>
                <div className={styles.auto_number}>{item.number}</div>
                <div className={styles.auto_letter}>{item.heading} </div>
              </div>
  
              <div className={styles.auto_img_container}>
                <div className={styles.auto_img}>
                  <img src={item.image} alt="engine" />
  
                  <Link to={item.page_link}>
                    <div className={styles.auto_pack}>
                      Pack With Us
                    </div>
                  </Link>
                </div>
                <div className={styles.auto_img_text}>{item.content}</div>
              </div>
  
              {
                item.isSlider && <Slider subProducts={item.subProducts} />
              }
            </div>
          ))
        }
      </>
    )
}

export default Labels_Secondary;