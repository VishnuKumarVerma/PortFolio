import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";
motion;

const Footer = () => {
  const footerSections = [
    {
      content: (
        <>
          <h1>Portfolio</h1>
        </>
      ),
    },
    {
      title: "Education",
      content: (
        <ul>
          <li>
            College: <br /> Kiet Group Of Intitution
          </li>
          <li>Btech (CSE)</li>
          <li>Ghaziabad, Uttar Pradesh</li>
        </ul>
      ),
    },
    {
      title: "Header",
      content: (
        <ul>
          <motion.li transition={{ type: "spring", stiffness: 300 }}>
            Home
          </motion.li>
          <motion.li transition={{ type: "spring", stiffness: 300 }}>
            Projects
          </motion.li>
          <motion.li transition={{ type: "spring", stiffness: 300 }}>
            Contact Us
          </motion.li>
        </ul>
      ),
    },
    {
      title: "Social Media",
      content: (
        <ul>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "",
      content: (
        <a href="#" className={styles.backToTop}>
          <FaArrowUp />
        </a>
      ),
    },
  ];

  return (
    <footer className={styles.footer}>
      {footerSections.map((section, index) => (
        <div key={index} className={styles.footerSection}>
          <h3>{section.title}</h3>
          {section.content}
        </div>
      ))}
    </footer>
  );
};

export default Footer;
