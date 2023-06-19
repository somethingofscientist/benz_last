import React from "react";
import styled from "styled-components";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [dropdown, setDropdown] = useState([false, false, false, false, false]);
  function replaceAt(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  const handleToogle = (index) => {
    let arr = replaceAt(dropdown, index, !dropdown[index]);
    setDropdown(arr);
  };


  //  for the languages 
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }


  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navbar}>
          {/* logo */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="company_logo" />
            </Link>
          </div>

          <div className={styles.rightMenu}>
            {/* globe icon */}
              <BsGlobe color="white" size={28} />
            {/* <div className={styles.l_dropdown}>
              <button onClick={() => handleClick('en')}>
                English
              </button>
              <button onClick={() => handleClick('chi')}>
                Chinese
              </button>
              <button onClick={() => handleClick('ko')}>
                Korean
              </button>
            </div> */}

            {/* hamburger menu */}

            <div className={styles.n_menu}>
              <GiHamburgerMenu
                onClick={() => setBurgerOpen(true)}
                color="white"
                size={28}
              />
            </div>
          </div>
        </div>

        <Menu show={burgerOpen}>
          <FlexNavItems>
            <li className={styles.iconSpace}>
              <BsGlobe size={28} />
            </li>
            <li>
              <AiOutlineClose size={28} onClick={() => setBurgerOpen(false)} />
            </li>
          </FlexNavItems>
          <OtherDetails>
            <li className={styles.otherMenu}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                About{" "}
              </Link>
              {dropdown[0] ? (
                <FaChevronUp onClick={() => handleToogle(0)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(0)} />
              )}
            </li>

            <DropDown visible={dropdown[0]}>
              <li>
                <HashLink
                  smooth
                  to="/about#section0"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  history
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  benefits
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  awards
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  environmental responsibilities
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  our team
                </HashLink>
              </li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Products{" "}
              </Link>
              {dropdown[1] ? (
                <FaChevronUp onClick={() => handleToogle(1)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(1)} />
              )}
            </li>
            <DropDown visible={dropdown[1]}>
              <li>anti - corrosion</li>
              <li>anti - humidity</li>
              <li>industrial packaging</li>
              <li>handling</li>
            </DropDown>
            <li className={styles.otherMenu}>
              <Link
                to="/industry"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Industries{" "}
              </Link>
              {dropdown[2] ? (
                <FaChevronUp onClick={() => handleToogle(2)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(2)} />
              )}
            </li>
            <DropDown visible={dropdown[2]}>
              <li>automobile industry</li>
              <li>military applications</li>
              <li>aerospace</li>
              <li>contract packaging</li>
              <li>electronics</li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Services{" "}
              </Link>
            </li>
            <li className={styles.otherMenu}>
              <Link
                to="/resources"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Resources{" "}
              </Link>
              {dropdown[3] ? (
                <FaChevronUp onClick={() => handleToogle(3)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(3)} />
              )}
            </li>
            <DropDown visible={dropdown[3]}>
              <li>packaging facts</li>
              <li>packaging tips</li>
              <li>become a distributor</li>
              <li>work with us</li>
              <li>FAQ</li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                News{" "}
              </Link>
              {dropdown[4] ? (
                <FaChevronUp onClick={() => handleToogle(4)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(4)} />
              )}
            </li>
            <DropDown visible={dropdown[4]}>
              <li>events</li>
              <li>awards</li>
              <li>newsletter</li>
              <li>testimonials</li>
            </DropDown>
            <li className={styles.otherMenu}>contact</li>
          </OtherDetails>
        </Menu>
      </div>
      {/* background-image */}
      {/* <div className={styles.imageContainer}></div> */}
    </>
  );
};

export default Navbar;

const FlexNavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 71px 128px 20px 288px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 9999999;
  list-style: none;
  text-transform: uppercase;
  background: white;
  width: 545px;
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: 0.2s;
  overflow-y: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 572px) {
    width: 90%;
  }
`;

const OtherDetails = styled.div`
  width: 220px;
  margin-left: 61px;
  font-size: 24px;
  font-weight: 700;
  line-height: 58px;
`;

const DropDown = styled.div`
  font-weight: 400;
  font-size: 24px;
  text-transform: capitalize;
  width: 350px;
  display: ${(props) => (props.visible ? "block" : "none")};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(100%)"};
  transition: 0.5s;
`;
