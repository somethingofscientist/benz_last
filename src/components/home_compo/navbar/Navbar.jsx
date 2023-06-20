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

            {/* hamburger menu */}

            <GiHamburgerMenu
              onClick={() => setBurgerOpen(true)}
              color="white"
              size={28}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <Menu show={burgerOpen}>
          <FlexNavItems>
            <li className={styles.iconSpace}>
              <BsGlobe size={28} />
            </li>
            <li>
              <AiOutlineClose
                size={28}
                onClick={() => setBurgerOpen(false)}
                style={{ cursor: "pointer" }}
              />
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
                  to="/about#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  history
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  benefits
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  awards
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  environmental responsibilities
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section5"
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
              <li>
                <HashLink
                  smooth
                  to="/products?anti-corosion"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  anti - corrosion
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products?anti-humidity"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  anti - humidity
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products?industrial"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  industrial packaging
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products?handling"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  handling
                </HashLink>
              </li>
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
              <li>
                <HashLink
                  smooth
                  to="/industry#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  automobile industry
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  military applications
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  aerospace
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  contract packaging
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section5"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  electronics
                </HashLink>
              </li>
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
              <li>
                <HashLink
                  smooth
                  to="/resources#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  packaging facts
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  packaging tips
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  become a distributor
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  work with us
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section5"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  FAQ
                </HashLink>
              </li>
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
              <li>
                <HashLink
                  smooth
                  to="/news#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  events
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/news#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  awards
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/news#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  newsletter
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/news#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  testimonials
                </HashLink>
              </li>
            </DropDown>
            <li className={styles.otherMenu}>
              <HashLink to="/contact_page">
                contact
              </HashLink>
            </li>
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
