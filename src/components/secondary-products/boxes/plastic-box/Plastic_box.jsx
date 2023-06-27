import React from 'react'
import styles from '../first_containers/Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import foldable from '../../../images/foldable.jpg';


const Plastic_box = () => {
    const arr = [
        {
            number: "1",
            heading: "PP Bins",
            image: vci_film,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
        },
        {
            number: "2",
            heading: "Plastic Crates",
            image: vci_film,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
        },
        {
            number: "3",
            heading: "Foldable Bins",
            image: foldable,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
        },
    ]
    return (
        <>
        <div className={styles.header_bg}>
          <img src={header_heading} alt="" />
          <div className={styles.imageContainer}></div>
          <div className={styles.header}>
            Plastic Box
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
  
                  {/* <Link to={item.page_link}>
                    <div className={styles.auto_pack}>
                      Pack With Us
                    </div>
                  </Link> */}
                </div>
                <div className={styles.auto_img_text}>{item.content}</div>
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