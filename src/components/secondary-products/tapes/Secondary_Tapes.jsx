import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';


const Secondary_Tapes = () => {
  const arr = [
    {
      number: "1",
      heading: "VCI HDPE Tapes",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "2",
      heading: "BOPP Tapes",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "3",
      heading: "Paper Tapes",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
      number: "4",
      heading: "Printed Tapes",
      image: vci_film,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
    },
    {
        number: "5",
        heading: "Low-VOC tapes",
        image: vci_film,
        content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      },
      {
        number: "6",
        heading: "Double Sided Tape",
        image: vci_film,
        content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      },
      {
        number: "7",
        heading: "Floor Marking Tapes",
        image: vci_film,
        content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          Tapes 
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

export default Secondary_Tapes;