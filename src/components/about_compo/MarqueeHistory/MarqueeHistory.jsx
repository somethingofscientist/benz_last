import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import stamp_paper from '../../images/history1.svg';
import styles from './Marquee.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";


const MarqueeHistory = () => {
    const { t, i18n } = useTranslation();
    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = (event) => {
        const { scrollTop } = event.target;
        setScrollPosition(scrollTop);
    };
    console.log("scrollPosition", scrollPosition)
    return (
        // /set according to 80% width
        // <>
        //     <a id="section1">
        //         <div>
        //             <div className={styles.products_tag}>
        //                 <Marquee
        //                     speed={200}
        //                     loop={0}
        //                 >
        //                     <p>{t("History")} &nbsp;	 </p>
        //                     <p>{t("History")} &nbsp;	 </p>
        //                 </Marquee>
        //             </div>
        //         </div>
        //     </a>

        //     <div className={styles.product_image_container}>
        //         <div className={styles.product_timeline}>

        //             <div className={(scrollPosition == 0 && scrollPosition <= 600) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1984"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1984
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 600 && scrollPosition <= 1200) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1989"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1989
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 1200 && scrollPosition <= 1800) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1998"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1998
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 1800 && scrollPosition <= 2400) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2005"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2005
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 2400 && scrollPosition <= 3000) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2009"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2009
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 3000 && scrollPosition <= 3600) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2013"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2013
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 3600 && scrollPosition <= 4200) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2017"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2017
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 4200 && scrollPosition <= 4800) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2018"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2018
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 4800 && scrollPosition <= 5400) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2023"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2023
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year_green}></div>
        //             <div className={styles.line_year_green_dot}></div>

        //         </div>
        //         <div className={styles.award_img} onScroll={handleScroll}>
        //             <img id="1984" src={stamp_paper} alt="" />
        //             <img id="1989" src={stamp_paper} alt="" />
        //             <img id="1998" src={stamp_paper} alt="" />

        //             <img id="2005" src={stamp_paper} alt="" />
        //             <img id="2009" src={stamp_paper} alt="" />
        //             <img id="2013" src={stamp_paper} alt="" />

        //             <img id="2017" src={stamp_paper} alt="" />
        //             <img id="2018" src={stamp_paper} alt="" />
        //             <img id="2023" src={stamp_paper} alt="" />
        //         </div>
        //     </div>
        // </>


        // set according to 50% width
        <>
            <a id="section1">
                <div>
                    <div className={styles.products_tag}>
                        <Marquee
                            speed={200}
                            loop={0}
                        >
                            <p>{t("History")} &nbsp;	 </p>
                            <p>{t("History")} &nbsp;	 </p>
                        </Marquee>
                    </div>
                </div>
            </a>

            <div className={styles.product_image_container}>
                <div className={styles.product_timeline}>

                    <div className={(scrollPosition == 0 && scrollPosition <= 360) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="1984"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >1984
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 360 && scrollPosition <= 720) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="1989"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >1989
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 720 && scrollPosition <= 1080) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="1998"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >1998
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 1080 && scrollPosition <= 1440) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2005"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2005
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 1440 && scrollPosition <= 1880) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2009"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2009
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 1880 && scrollPosition <= 2160) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2013"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2013
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 2160 && scrollPosition <= 2520) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2017"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2017
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 2520 && scrollPosition <= 2880) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2018"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2018
                        </Link>
                    </div>
                    <div className={styles.line_year}></div>
                    <div className={(scrollPosition >= 2880 && scrollPosition <= 3240) ? styles.year_active : styles.year_deactivate}>
                        <Link
                            to="2023"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            className={styles.link}
                        >2023
                        </Link>
                    </div>
                    <div className={styles.line_year_green}></div>
                    <div className={styles.line_year_green_dot}></div>

                </div>
                <div className={styles.award_img} onScroll={handleScroll}>
                    <img id="1984" src={stamp_paper} alt="" />
                    <img id="1989" src={stamp_paper} alt="" />
                    <img id="1998" src={stamp_paper} alt="" />

                    <img id="2005" src={stamp_paper} alt="" />
                    <img id="2009" src={stamp_paper} alt="" />
                    <img id="2013" src={stamp_paper} alt="" />

                    <img id="2017" src={stamp_paper} alt="" />
                    <img id="2018" src={stamp_paper} alt="" />
                    <img id="2023" src={stamp_paper} alt="" />
                </div>
            </div>
        </>

        // <>
        //     <a id="section1">
        //         <div>
        //             <div className={styles.products_tag}>
        //                 <Marquee
        //                     speed={200}
        //                     loop={0}
        //                 >
        //                     <p>{t("History")} &nbsp;	 </p>
        //                     <p>{t("History")} &nbsp;	 </p>
        //                 </Marquee>
        //             </div>
        //         </div>
        //     </a>

        //     <div className={styles.product_image_container}>
        //         <div className={styles.product_timeline}>

        //             <div className={(scrollPosition == 0 && scrollPosition <= 170) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1984"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1984
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 170 && scrollPosition <= 342) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1989"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1989
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 342 && scrollPosition <= 515) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="1998"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >1998
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 515 && scrollPosition <= 684) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2005"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2005
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 684 && scrollPosition <= 855) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2009"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2009
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 855 && scrollPosition <= 1027) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2013"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2013
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 1027 && scrollPosition <= 1100) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2017"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2017
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 1100 && scrollPosition <= 1220) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2018"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2018
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year}></div>
        //             <div className={(scrollPosition >= 1420 && scrollPosition <= 1500) ? styles.year_active : styles.year_deactivate}>
        //                 <Link
        //                     to="2023"
        //                     spy={true}
        //                     smooth={true}
        //                     offset={-50}
        //                     duration={500}
        //                     className={styles.link}
        //                 >2023
        //                 </Link>
        //             </div>
        //             <div className={styles.line_year_green}></div>
        //             <div className={styles.line_year_green_dot}></div>

        //         </div>
        //         <div className={styles.award_img} onScroll={handleScroll}>
        //             <img id="1984" src={stamp_paper} alt="" />
        //             <img id="1989" src={stamp_paper} alt="" />
        //             <img id="1998" src={stamp_paper} alt="" />

        //             <img id="2005" src={stamp_paper} alt="" />
        //             <img id="2009" src={stamp_paper} alt="" />
        //             <img id="2013" src={stamp_paper} alt="" />

        //             <img id="2017" src={stamp_paper} alt="" />
        //             <img id="2018" src={stamp_paper} alt="" />
        //             <img id="2023" src={stamp_paper} alt="" />
        //         </div>
        //     </div>
        // </>
    )
}

export default MarqueeHistory