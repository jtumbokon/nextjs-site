import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import ThemeToggler from "./NavHeader/ThemeToggler";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/JanTumbokon"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Jan's Twitter profile"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        id="profile-link"
        href="https://github.com/jtumbokon/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Jan's GitHub Profile"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.linkedin.com/in/jan-tumbokon-08a7691a8/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Jan's LinkedIn Profile"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

const useShowMenu = () => {
  const [ShowMenu, setShowMenu] = useState("initial");

  const toggleMenu = () => {
    ShowMenu === "initial" ? setShowMenu("active") : setShowMenu("deactive");
    ShowMenu === "active" ? setShowMenu("deactive") : setShowMenu("active");
  };

  useEffect(() => {
    if (ShowMenu === "deactive") setShowMenu("initial");
  }, [ShowMenu]);
  return [ShowMenu, toggleMenu];
};

const Menu = ({ ShowMenu, toggleMenu }) => {
  return (
    <>
      <div className={`menu-container ${ShowMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <Link href="/">
                <a onClick={toggleMenu}>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a onClick={toggleMenu}>ABOUT</a>
              </Link>
            </li>
            <li>
              <Link href="/#portfolio-projects">
                <a onClick={toggleMenu}>PORTFOLIO</a>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <a onClick={toggleMenu}>CONTACT</a>
              </Link>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    </>
  );
};
const Nav = ({ ShowMenu, toggleMenu, darkTheme, toggleTheme }) => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            <Link href="/">
              <a className="brand-logo">
                jan
                <strong>tumbokon</strong>
              </a>
            </Link>
          </p>
          <div className="togglerAndBurger">
            <ThemeToggler darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <a
              onClick={toggleMenu}
              className={
                ShowMenu === "active" ? "menu-button active" : "menu-button"
              }
            >
              <span />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

const Navigation = ({ darkTheme, toggleTheme }) => {
  const [ShowMenu, toggleMenu] = useShowMenu();
  return (
    <>
      <NavigationStyles>
        <Nav
          toggleMenu={toggleMenu}
          ShowMenu={ShowMenu}
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
        <Menu toggleMenu={toggleMenu} ShowMenu={ShowMenu} />
      </NavigationStyles>
    </>
  );
};
export default Navigation;

const NavigationStyles = styled.div`
  .togglerAndBurger {
    display: flex;
    align-items: center;
  }

  #roundToggle {
    background: #000;
  }

  /*****************
 *****************
    MENU STYLES
 *****************
 *****************/

  /***** Overlay Layer *****/
  .menu-container > .overlay,
  .menu-container.active > .overlay {
    position: absolute;
    right: 0;
    height: calc(100vh - 7.5rem);
    width: calc(100vw - 7.5rem);
    background: #fafafa;
  }

  .menu-container.active > .overlay {
    animation: overlay-slide-in 300ms forwards 300ms;
  }

  @keyframes overlay-slide-in {
    from {
      width: calc(100vw - 7.5rem);
    }
    to {
      width: 0;
    }
  }

  .menu-container > .overlay {
    animation: overlay-slide-out 300ms forwards;
  }

  @keyframes overlay-slide-out {
    from {
      left: 0;
      width: 0;
    }
    to {
      left: 0;
      width: calc(100vw - 7.5rem);
    }
  }

  /***** Menu Layer *****/
  .menu-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: #202934;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .menu-container::before,
  .menu-container::after {
    content: "";
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
  }

  .menu-container::before {
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true);
  }

  .menu-container::after {
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Trees.svg?sanitize=true)
      bottom repeat-x;
  }

  .menu-container.initial {
    z-index: -1;
    opacity: 0;
    animation: none;
    display: none;
  }

  .menu-container.deactive {
    animation: fade-out 600ms forwards;
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      z-index: 999;
    }
    50% {
      opacity: 1;
      z-index: 999;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }

  .menu-container.active {
    animation: fade-in 300ms forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      z-index: -1;
    }
    to {
      opacity: 1;
      z-index: 999;
    }
  }

  /***** Menu Items: Animation *****/
  .menu-container ul,
  .menu-container .social {
    margin-left: -5rem;
    opacity: 0;
    animation: slide-out 200ms forwards;
  }

  .menu-container ul {
    list-style-type: none !important;
    font-size: 3rem;
  }

  @keyframes slide-out {
    from {
      opacity: 1;
      margin-left: 0px;
    }
    to {
      opacity: 0;
      margin-left: -5rem;
    }
  }

  .menu-container.active ul,
  .menu-container.active .social {
    animation: slide-in 300ms forwards 600ms;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      margin-left: -5rem;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }

  /***** Menu Items: Hover Animation *****/
  .menu-container ul li {
    border-left: 0.2rem solid transparent;
    transition: border-left 200ms;
  }

  .menu-container ul li a {
    font-size: 3rem;
    padding-left: 0.5rem;
    @media only screen and (max-width: 3840px) {
      font-size: 8rem;
    }
    @media only screen and (max-width: 2560px) {
      font-size: 6.5rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 5rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 2.7rem;
    }
    @media only screen and (max-width: 426px) {
      font-size: 1.2rem;
    }
  }

  .menu-container ul li a::after {
    content: " »";
    font-size: 2.5rem;
    color: transparent;
    transition: color 200ms;

    @media only screen and (max-width: 3840px) {
      font-size: 6.5rem;
    }
    @media only screen and (max-width: 2560px) {
      font-size: 5.25rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 3.25rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 2.25rem;
    }
    @media only screen and (max-width: 426px) {
      font-size: 1.75rem;
    }
  }

  .menu-container ul li a:hover::after {
    content: " »";
    color: #ff0000;
  }

  .social {
    padding: 1rem 0 0 0.5rem;
  }

  .social a {
    font-size: 1.5rem;
    padding: 0.2rem;
    margin: 0 1rem;
    @media only screen and (max-width: 3840px) {
      font-size: 3.5rem;
      padding: 0.6rem;
    }
    @media only screen and (max-width: 2560px) {
      font-size: 2.75rem;
      padding: 0.5rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
      padding: 0.4rem;
    }
    @media only screen and (max-width: 1280px) {
      font-size: 1.9rem;
      padding: 0.26rem;
    }
    @media only screen and (max-width: 854px) {
      font-size: 1.5rem;
      padding: 0.18rem;
    }
    @media only screen and (max-width: 426px) {
      font-size: 1.05rem;
      padding: 0.14rem;
    }
  }

  .menu-container a,
  .menu-container a:visited {
    color: #fafafa;
  }

  .menu-container a:hover,
  .menu-container a:active {
    color: #ff0000;
  }

  @media only screen and (max-width: 649px) {
    .menu-container {
      border: none;
    }

    .menu-container > .overlay,
    .menu-container.active > .overlay {
      height: 100vh;
      width: 100vw;
    }

    .menu-container.active > .overlay {
      animation: overlay-slide-in 300ms forwards 300ms;
    }

    @keyframes overlay-slide-in {
      from {
        width: 100vw;
      }
      to {
        width: 0;
      }
    }

    .menu-container > .overlay {
      animation: overlay-slide-out 300ms forwards;
    }

    @keyframes overlay-slide-out {
      from {
        left: 0;
        width: 0;
      }
      to {
        left: 0;
        width: 100vw;
      }
    }
  }

  /*****************
 *****************
    NAV STYLES
 *****************
 *****************/

  #navbar {
    position: fixed;
    z-index: 9999;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    background: #252525;
  }

  #navbar.bg-active {
    background: #181d23;
  }

  #navbar .nav-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .brand a {
    color: #fafafa;
  }

  #navbar .brand {
    font-size: 1.6rem;
    color: #fafafa;
    cursor: default;
    @media only screen and (max-width: 3840px) {
      font-size: 3.5rem;
    }
    @media only screen and (max-width: 2560px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
    }

    @media only screen and (max-width: 854px) {
      font-size: 1.5rem;
    }
  }

  /***** Menu Button *****/
  .menu-button {
    position: relative;
    height: 1.375rem;
    width: 1.875rem;
    outline: none;

    @media only screen and (max-width: 3840px) {
      height: 2.5rem;
      width: 4rem;
    }
    @media only screen and (max-width: 2560px) {
      height: 2.8125rem;
      width: 4.0625rem;
    }
    @media only screen and (max-width: 1920px) {
      height: 1.5rem;
      width: 2.5rem;
    }
    @media only screen and (max-width: 1280px) {
      height: 1.9875rem;
      width: 2.6375rem;
    }
    @media only screen and (max-width: 854px) {
      height: 1.2375rem;
      width: 1.6875rem;
    }
    @media only screen and (max-width: 426px) {
      height: 0.9625rem;
      width: 1.3125rem;
    }
  }

  .menu-button span,
  .menu-button span::before,
  .menu-button span::after {
    position: absolute;
    content: "";
    background: #fafafa;
    transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
    width: 1.875rem;
    height: 0.1875rem;

    @media only screen and (max-width: 3840px) {
      width: 4rem;
      height: 0.4rem;
    }
    @media only screen and (max-width: 2560px) {
      width: 3.2rem;
      height: 0.35rem;
    }
    @media only screen and (max-width: 1920px) {
      width: 2.8rem;
      height: 0.29rem;
    }
    @media only screen and (max-width: 1280px) {
      width: 2.4375rem;
      height: 0.25375rem;
    }
    @media only screen and (max-width: 854px) {
      width: 1.6875rem;
      height: 0.16875rem;
    }
    @media only screen and (max-width: 426px) {
      width: 1.3125rem;
      height: 0.13125rem;
    }
  }

  .menu-button span {
    position: relative;
    display: block;
    top: 50%;
    transform: translate(0, -50%);
  }

  .menu-button span::before {
    top: -0.5rem;
    @media only screen and (max-width: 3840px) {
      top: -1.2rem;
    }
    @media only screen and (max-width: 2560px) {
      top: -1.1rem;
    }
    @media only screen and (max-width: 1920px) {
      top: -0.8rem;
    }
    @media only screen and (max-width: 1280px) {
      top: -0.85rem;
    }
    @media only screen and (max-width: 854px) {
      top: -0.6rem;
    }
    @media only screen and (max-width: 426px) {
      top: -0.5rem;
    }
  }

  .menu-button span::after {
    top: 0.5rem;
    @media only screen and (max-width: 3840px) {
      top: 1.2rem;
    }
    @media only screen and (max-width: 2560px) {
      top: 1.1rem;
    }
    @media only screen and (max-width: 1920px) {
      top: 0.8rem;
    }
    @media only screen and (max-width: 1280px) {
      top: 0.85rem;
    }
    @media only screen and (max-width: 854px) {
      top: 0.6rem;
    }
    @media only screen and (max-width: 426px) {
      top: 0.5rem;
    }
  }

  .menu-button:hover > span,
  .menu-button:hover > span::before,
  .menu-button:hover > span::after {
    background: #ff0000;
  }

  .menu-button.active > span {
    background: transparent;
  }

  .menu-button.active > span::before {
    transform: rotate(-225deg);
    top: 0px;
  }

  .menu-button.active > span::after {
    transform: rotate(225deg);
    top: 0px;
  }
`;
