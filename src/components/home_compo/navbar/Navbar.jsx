import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dropdown from "./dropdown/Dropdown";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import products from "../../../products/Products"


const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("Lang");
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [dropdown, setDropdown] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [showProducts, setShowProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
    setTimeout(() => {
      window.location.reload();
    }, 6);
  };
  const searchHandler = (event) => {
    const inputValue = event.target.value.trim().toLowerCase();
    if (inputValue === "") {
      setShowProducts([]);
    } else {
      const temp = [];
      products.forEach((product) => {
        if (temp.length < 6 && product.title.toLowerCase().includes(inputValue)) {
          temp.push(product);
        }
      });
      setShowProducts([...temp]);
      setIsDropdown(true);
    }
    setSearchQuery(inputValue);
  };
  const handleResultClick = () => {
    // Clear the input field when a result is clicked
    setSearchQuery('');
    setIsDropdown(false);
  };
  const toggleSearch = () => {
    // Toggle the search field open or closed
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
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
    return document.removeEventListener("mousemove", () => { });
  }, [burgerOpen]);


  useEffect(() => {
    setDropdown([]);
    setBurgerOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <div id="navbar" className={styles.navContainer}>
        <div className={styles.navbar}>
          {/* logo */}
          <div className={styles.logo} onClick={scrollToTop}>
            <Link to="/">
              <img src={logo} alt="company_logo" />
            </Link>
          </div>

          {/* input field */}
          {
            isSearchOpen && (
              <div className={styles.searchBar}>
                <input
                  type="search"
                  onChange={searchHandler}
                  placeholder="Search Product"
                  value={searchQuery}
                />
                <div className={styles.searchList}>
                  {
                    isDropdown &&
                    showProducts?.length > 0 && (
                      <div className={styles.searchList}>
                        {showProducts.map((product) => (
                          <li key={product.id}>
                            <Link
                              className={styles.searchList}
                              to={product.url}
                              onClick={handleResultClick}
                            >
                              {product.title}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            )
          }
          {/* input field */}


          <div className={styles.rightMenu}>

            <AiOutlineSearch
              color="white"
              size={28}
              style={{ cursor: "pointer" }}
              onClick={toggleSearch}
            />

            <Dropdown selected={selected} setSelected={setSelected} />

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
            {/* <li>
              <AiOutlineClose
                size={28}
                style={{ cursor: "pointer", color: "#000" }}
                onClick={() => setBurgerOpen(false)}
              />
            </li> */}
          </FlexNavItems>
          <OtherDetails>
            <li className={styles.otherMenu}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("About")} {" "}
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
                  {t("history")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("why choose us")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("awards")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("environmental")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section5"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("our team")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about#section6"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("testimonials")}
                </HashLink>
              </li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("Products")}{" "}
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
                  to="/products/corrosion"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("anti - corrosion")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products/humidity"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("anti - humidity")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products/traditional"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Traditional packaging")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/products/handling"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("handling")}
                </HashLink>
              </li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/industry"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("Industries")}{" "}
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
                  {t("automobile industry")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("military applications")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("aerospace")}
                </HashLink>
              </li>
              {/* <li>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("contract packaging")}
                </HashLink>
              </li> */}
              <li>
                <HashLink
                  smooth
                  to="/industry#section5"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("electronics")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section6"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("FMCG")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/industry#section7"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Retail")}
                </HashLink>
              </li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/resources"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("Resources")}{" "}
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
                  {t("packaging facts")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("packaging tips")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("work with us")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("become distributor")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/resources#rest1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("FAQ")}
                </HashLink>
              </li>
            </DropDown>

            <li className={styles.otherMenu}>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("News")}{" "}
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
                  {t("events")}
                </HashLink>
              </li>
              {/* <li>
                <HashLink
                  smooth
                  to="/news#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("awards")}
                </HashLink>
              </li> */}
              <li>
                <HashLink
                  smooth
                  to="/news#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("newsletter")}
                </HashLink>
              </li>
              {/* <li>
                <HashLink
                  smooth
                  to="/news#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("testimonials")}
                </HashLink>
              </li> */}
            </DropDown>
            <li className={styles.otherMenu}>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("Services")}{" "}
              </Link>
            </li>
            <li className={styles.otherMenu}>
              <Link
                to="/career"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                {t("Career Page")}{" "}
              </Link>
            </li>
            <li className={styles.otherMenu}>
              <HashLink to="/contact_page">
                {t("contact us")}
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
  width: 430px;
  position: fixed;
  height: 100vh;
  overflow: hidden;
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
    overflow:hidden;
  }
`;

const OtherDetails = styled.div`
  width: 240px;
  margin-left: 61px;
  padding-bottom: 100px;
  font-size: 24px;
  font-weight: 700;
  line-height: 58px;
  ${'' /* height:100vh; */}
  overflow-y:auto;
  overflow-x:hidden;
  ${'' /* background:red; */}
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
