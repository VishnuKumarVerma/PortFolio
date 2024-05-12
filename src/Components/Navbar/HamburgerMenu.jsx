// import React from 'react';
import menuStyles from "./HamburgerMenu.module.css";
import { stack as Menu } from "react-burger-menu";
import "./HamburgerMenu.module.css"; // Import custom CSS for animations
import { IoCloseCircleSharp } from "react-icons/io5";

function HamburgerMenu() {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
    },
    bmBurgerBars: {
      background: "#fff",
    },
    bmBurgerBarsHover: {
      background: "red",
    },
    bmMenuWrap: {
      position: "fixed",
      width: "300px", // Adjust as needed
      top: 0,
      right: 0,
    },
    bmMenu: {
      background: "#000",
      padding: "2em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#000",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column", // Align items vertically
    },
    bmItem: {
      display: "block",
      marginBottom: "1em", // Add space between items
    },
  };
  return (
    <div className={menuStyles.menuClass}>
      <Menu styles={styles}>
        <a id="home" className="menu-item menu-close" href="">
          <IoCloseCircleSharp />
        </a>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          Services
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Case Studies
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Blog
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a id="contact" className="menu-item" href="/contact">
          <button>Search</button>
        </a>
      </Menu>
    </div>
  );
}

export default HamburgerMenu;
