import React, { useState } from 'react';
import styles from './Testimonial.module.css';
import yamaha from '../../images/yamaha.png';
// import volvo from '../../images/yamaha.png';
import tata from '../../images/tata.png';
import toyo from '../../images/toyo.png';
import suzu from '../../images/suzu.png';
import volvo from '../../images/volvo.png';
import renault from '../../images/renault.png';
import { useTranslation } from 'react-i18next';


const Testimonials = () => {
  const [hoverState, setHoverState] = useState({});

  const handleHover = (index) => {
    setHoverState((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
  const { t, i18n } = useTranslation();

  const arr = [
    {
      logo: volvo,
      heading: "Flip Front 1",
      heading2: "Flip Back 1",
      para: "Volvo is known for its exceptional packaging, emphasizing both style and functionality. Their vehicles boast well-thought-out interiors with innovative storage options and a focus on safety. The packaging materials used by Volvo are of premium quality, reflecting their commitment to luxury and durability. Overall, Volvo's packaging approach delivers a satisfying and luxurious experience."
    },
    {

      logo: renault,
      heading: "Flip Front 2",
      heading2: "Renault Packaging Testimonial",
      para: "Renault has impressed me with their thoughtful and practical packaging. The interior of their vehicles is well-designed, maximizing space utilization and offering ample storage compartments. The attention to detail and use of high-quality materials give the cars a premium feel. Renault's commitment to safety, sustainability, and excellent customer service further enhances the overall packaging experience."
    },
    {

      logo: suzu,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "Suzuki demonstrates a practical and efficient packaging strategy. Their vehicles are designed to make the most of available space, with smart storage solutions and a user-friendly interior layout. While the packaging may not be as luxurious as some other brands, Suzuki excels in providing value for money, reliability, and a hassle-free ownership experience."
    },
    {
      logo: tata,
      heading: "Flip Front 1",
      heading2: "Flip Back 1",
      para: "Tata's packaging approach is commendable, particularly in their range of affordable and practical vehicles. They focus on maximizing interior space and offering functional features that cater to the needs of customers. While the packaging may not be as extravagant as some high-end brands, Tata prioritizes reliability and affordability, making them an attractive choice for many buyers."
    },
    {

      logo: yamaha,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "Yamaha's packaging for their motorcycles is noteworthy. They prioritize the protection of their products during transportation, ensuring they arrive in excellent condition. The packaging materials used are robust and durable, safeguarding the motorcycles from potential damage. Yamaha's attention to packaging reflects their commitment to quality and customer satisfaction."
    },
    {

      logo: toyo,
      heading: "Flip Front 2",
      heading2: "Flip Back 2",
      para: "Toyota excels in packaging their vehicles to meet the needs of their customers. Their cars showcase clever storage solutions and a user-friendly interior layout. Toyota's attention to detail ensures that the packaging materials are of high quality, providing a sense of durability. Additionally, Toyota's reputation for reliability and their commitment to safety contribute to a positive packaging testimonial."
    },
  ];

  return (
    <>
      <div className={styles.test_container} id='section4'>
        <div className={styles.test_heading}>{t("Testimonials")} </div>

        {/* video section */}
        <div className={styles.test_video_container}>
          {arr.map((item, index) => (
            <div
              key={index}
              className={`${styles.tile} ${hoverState[index] ? styles.flipped : ''}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
            >
              <div className={styles.front}>
                <img src={item.logo} alt="" />
              </div>
              <div className={styles.back}>
                {/* <h1>{item.heading2}</h1> */}
                <p> {t(`${item.para}`)} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
