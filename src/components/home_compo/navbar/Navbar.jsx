import React from "react";
import { useLocation } from "react-router-dom";
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
import Dropdown from "./dropdown/Dropdown";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("Lang");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [dropdown, setDropdown] = useState([]);

  const handleToogle = (index) => {
    const temp = [...dropdown];
    const dropdownIndex = temp.indexOf(index);
    if (dropdownIndex === -1) {
      temp.push(index);
    } else {
      temp.splice(dropdownIndex, 1);
    }
    setDropdown([...temp]);
    setBurgerOpen(true);
  };

  useEffect(() => {
    const navbarElement = document.getElementById("navbar");
    document.addEventListener(
      "mousemove",
      (event) => {
        if (burgerOpen && !navbarElement.matches(":hover")) {
          setBurgerOpen(false);
          setDropdown([]);
        }
      },
      []
    );
    return document.removeEventListener("mousemove", () => {});
  }, [burgerOpen]);

  useEffect(() => {
    setDropdown([]);
    setBurgerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div id="navbar" className={styles.navContainer}>
        <div className={styles.navbar}>
          {/* logo */}
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="company_logo" />
            </Link>
          </div>

          <div className={styles.rightMenu}>
            {/* globe icon */}
            {/* <BsGlobe color="white" size={28} /> */}
            <Dropdown selected={selected} setSelected={setSelected} />

            {/* hamburger menu */}

            <GiHamburgerMenu
              color="white"
              size={28}
              style={{ cursor: "pointer" }}
              onClick={() => setBurgerOpen(true)}
            />
          </div>
        </div>

        <Menu show={burgerOpen}>
          <FlexNavItems>
            <li className={styles.iconSpace}>{/* <BsGlobe size={28} /> */}</li>
            <li>
              <AiOutlineClose
                size={28}
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => setBurgerOpen(false)}
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
              {dropdown.indexOf(0) !== -1 ? (
                <FaChevronUp onClick={() => handleToogle(0)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(0)} />
              )}
            </li>

            <DropDown visible={dropdown.indexOf(0) !== -1}>
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
              {dropdown.indexOf(1) !== -1 ? (
                <FaChevronUp onClick={() => handleToogle(1)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(1)} />
              )}
            </li>
            <DropDown visible={dropdown.indexOf(1) !== -1}>
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
                  Traditional packaging
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
              {dropdown.indexOf(2) !== -1 ? (
                <FaChevronUp onClick={() => handleToogle(2)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(2)} />
              )}
            </li>
            <DropDown visible={dropdown.indexOf(2) !== -1}>
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
              <li>
                <HashLink
                  smooth
                  to="/industry#section6"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  FMCG
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section7"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Retail
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
              {dropdown.indexOf(3) !== -1 ? (
                <FaChevronUp onClick={() => handleToogle(3)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(3)} />
              )}
            </li>
            <DropDown visible={dropdown.indexOf(3) !== -1}>
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
                  work with us
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  become a distributor
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#rest1"
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
              {dropdown.indexOf(4) !== -1 ? (
                <FaChevronUp onClick={() => handleToogle(4)} />
              ) : (
                <FaChevronDown onClick={() => handleToogle(4)} />
              )}
            </li>
            <DropDown visible={dropdown.indexOf(4) !== -1}>
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
              <HashLink to="/contact_page">contact</HashLink>
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
  padding: 71px 228px 20px 288px;
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
