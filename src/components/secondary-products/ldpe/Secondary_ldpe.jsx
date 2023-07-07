import React from 'react'
import styles from '../boxes/first_containers/Descicannt.module.css'
// import tape from '../../../images/tape.svg'
import vci_film from '../../images/engine.svg'
import header_heading from '../../images/des_heading.svg';
import eco_bio from '../../images/eco-bio.jpg';
import eco_bio2 from '../../images/eco_bio2.jpg';
import eco_bio3 from '../../images/eco_bio3.jpg';
import zip_lock1 from '../../images/zip_lock1.jpg';
import zip_lock2 from '../../images/zip_lock2.jpeg';
import esd_bags1 from '../../images/esd_bags1.jpg';
import esd_bags2 from '../../images/esd_bags2.jpg';

import bag_roll1 from '../../images/bag_on_roll1.jpg';
import bag_roll2 from '../../images/bag_on_roll2.jpg';
import bag_roll3 from '../../images/bag_on_roll3.jpg';
import bag_roll4 from '../../images/bag_on_roll4.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Secondary_ldpe = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      heading: "Printed LD Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of printed LD bags for customized packaging solutions. Our printed LD (Low-Density) bags offer a combination of functionality and branding opportunities, allowing you to showcase your products while ensuring reliable protection and convenience.At Benz Packaging, we understand the importance of packaging that not only safeguards your products but also helps promote your brand and attract customers. That's why we offer a comprehensive range of printed LD bags that can be customized to meet your specific packaging needs, providing a visually appealing and informative packaging solution.",
    },
    {
      number: "2",
      heading: "Plain LD Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your reliable source for plain LD (Low-Density) bags that offer a simple yet effective packaging solution. Our plain LD bags are designed to provide reliable protection and convenience for various industries and applications.At Benz Packaging, we understand that sometimes a straightforward packaging option is all you need. Our plain LD bags offer a range of benefits that make them a practical choice for packaging your products securely and conveniently.",
    },
    {
      number: "3",
      heading: "Bags on Roll",
      image: [bag_roll1, bag_roll2, bag_roll3, bag_roll4],
      content: "Welcome to Benz Packaging, your trusted provider of bags on roll for convenient and efficient packaging solutions. Our bags on roll offer a practical and organized way to package and store various items, ensuring ease of use and optimal productivity in your packaging operations.At Benz Packaging, we understand the importance of streamlining your packaging processes while maintaining product integrity. Our bags on roll are designed to meet your specific packaging needs, providing a cost-effective and time-saving solution for a wide range of applications.",
    },
    {
      number: "4",
      heading: "Perforated Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of perforated bags for easy tear and convenient packaging solutions. Our perforated bags are designed to simplify your packaging process by providing a user-friendly and efficient solution for a wide range of applications.At Benz Packaging, we understand the importance of packaging that is not only reliable but also convenient to use. Our perforated bags feature strategically placed perforations that allow for effortless tearing, making it quick and hassle-free to access and package your items.",
    },
    {
      number: "5",
      heading: "Perforated Bags on Roll",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of perforated bags on roll for convenient and efficient packaging solutions. Our perforated bags on roll offer a practical and organized way to package and store various items, ensuring ease of use and optimal productivity in your packaging operations.At Benz Packaging, we understand the importance of streamlining your packaging processes while maintaining product integrity. Our perforated bags on roll are designed to meet your specific packaging needs, providing a cost-effective and time-saving solution for a wide range of applications.",
    },
    {
      number: "6",
      heading: "Pre Open bags on Roll",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of pre-opened bags on roll for convenient and efficient packaging solutions. Our pre-opened bags on roll offer a practical and organized way to package and store various items, ensuring ease of use and optimal productivity in your packaging operations.At Benz Packaging, we understand the importance of streamlining your packaging processes while maintaining product integrity. Our pre-opened bags on roll are designed to meet your specific packaging needs, providing a cost-effective and time-saving solution for a wide range of applications.",
    },
    {
      number: "7",
      heading: "Pallet Covers",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of pallet covers for reliable protection and secure shipping solutions. Our pallet covers are designed to safeguard your valuable goods during transportation and storage, ensuring their integrity and minimizing the risk of damage.At Benz Packaging, we understand the importance of ensuring that your palletized products are well-protected throughout the supply chain. Our pallet covers offer a cost-effective and practical solution for safeguarding your goods against dust, moisture, UV rays, and other environmental factors that can compromise their quality.",
    },
    {
      number: "8",
      heading: "Stretch Films",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of stretch films for secure and efficient palletization. Our stretch films are designed to tightly wrap and secure your palletized products, ensuring stability during transportation and storage.At Benz Packaging, we understand the importance of protecting your goods and optimizing your palletization process. Our stretch films offer a reliable solution to secure your products, minimize the risk of shifting or damage, and streamline your packaging operations.At Benz Packaging, we prioritize quality and ensure that our stretch films meet stringent industry standards. Our experienced team performs thorough quality control checks to maintain the performance, durability, and reliability of our packaging products.",
    },
    {
      number: "9",
      heading: "Engine Covers",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of engine covers for superior protection and performance. Our engine covers are specifically designed to safeguard your valuable engines from dust, debris, moisture, and other potential contaminants, ensuring their longevity and optimal functionality.At Benz Packaging, we understand the importance of preserving the integrity of your engines, whether they are stored, shipped, or undergoing maintenance. Our engine covers offer a reliable solution to keep your engines well-protected and in optimal condition, ensuring their performance and extending their service life.",
    },
    {
      number: "10",
      heading: "Garbage Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of garbage bags for efficient waste management solutions. Our garbage bags are designed to provide a reliable and hygienic solution for collecting and disposing of waste materials in various settings, whether it's for residential, commercial, or industrial purposes.At Benz Packaging, we understand the importance of proper waste management in maintaining cleanliness, hygiene, and environmental sustainability. Our garbage bags offer a practical and convenient way to contain and dispose of waste, ensuring a clean and organized environment while minimizing the risk of contamination or odors.",
    },
    {
      number: "11",
      heading: "Zip Lock Bags",
      image: [zip_lock1, zip_lock2],
      content: "Welcome to Benz Packaging, your trusted provider of zip lock bags for convenient and secure storage solutions. Our zip lock bags are designed to offer a reliable and versatile packaging option for storing and organizing various items, whether it's for personal, household, or business use.At Benz Packaging, we understand the importance of keeping your belongings well-protected and easily accessible. Our zip lock bags provide a practical and efficient solution to store a wide range of items while keeping them secure, organized, and free from dust, moisture, or other contaminants.",
    },
    {
      number: "12",
      heading: "Bio Degradable Bags",
      image: [eco_bio, eco_bio2, eco_bio3],
      content: "Welcome to Benz Packaging, your trusted provider of biodegradable bags for eco-friendly packaging solutions. Our biodegradable bags are designed to offer a sustainable alternative to traditional plastic bags, helping to reduce environmental impact and promote a greener future.At Benz Packaging, we understand the importance of responsible and sustainable packaging practices. Our biodegradable bags are made from materials that can naturally break down over time, minimizing their impact on the environment. By choosing our biodegradable bags, you can contribute to reducing plastic waste and protecting our planet.",
    },
    {
      number: "13",
      heading: "Compostable Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of compostable bags for sustainable packaging solutions. Our compostable bags are designed to offer an eco-friendly alternative to traditional plastic bags, helping to reduce waste and support a more sustainable future.At Benz Packaging, we understand the importance of responsible packaging practices and the need to minimize our impact on the environment. Our compostable bags are made from plant-based materials that can naturally break down into nutrient-rich compost, contributing to a circular economy and reducing landfill waste.",
    },
    {
      number: "14",
      heading: "Mailer Bags",
      image: vci_film,
      content: "Welcome to Benz Packaging, your trusted provider of mailer bags for secure and convenient shipping solutions. Our mailer bags are designed to offer a reliable and efficient packaging option for shipping various items, ensuring they reach their destination safely and in excellent condition.At Benz Packaging, we understand the importance of protecting your shipments during transit. Our mailer bags are specifically designed to provide superior protection, while also offering convenience and ease of use. Whether you are shipping small products, documents, or fragile items, our mailer bags are an ideal choice.",
    },
    {
      number: "15",
      heading: "Anti Static ESD Bags",
      image: [esd_bags1, esd_bags2],
      content: "Welcome to Benz Packaging, your trusted provider of anti-static ESD bags for reliable electrostatic discharge (ESD) protection. Our ESD bags are specifically designed to safeguard sensitive electronic components and devices from potential damage caused by static electricity during handling, transportation, and storage.Electrostatic discharge can pose a significant risk to sensitive electronic equipment, leading to malfunctions, data loss, or even complete failure. At Benz Packaging, we understand the importance of protecting your valuable electronic items, and our anti-static ESD bags offer a reliable solution to mitigate the risks associated with electrostatic discharge.",
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("LDPE")}
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
                <Carousel
                  autoPlay={true}
                  interval={2000}
                  infiniteLoop
                  showStatus={false}
                  showThumbs={false}
                  showArrows={false}
                >
                  {Array.isArray(item.image) ? (
                    item.image.map((imagePath, idx) => (
                      <div className={styles.images} key={idx}>
                        <img src={imagePath} alt={item.heading} />
                      </div>
                    ))
                  ) : (
                    <div className={styles.images}>
                      <img src={item.image} alt={item.heading} />
                    </div>
                  )}
                </Carousel>
                {/* <img src={item.image} alt="engine" /> */}

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

export default Secondary_ldpe;