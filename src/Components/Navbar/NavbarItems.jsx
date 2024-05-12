import HamburgerMenu from "./HamburgerMenu";
import styles from "./NavbarItems.module.css";
import { motion } from "framer-motion";

const NavbarItems = () => {
  const navbarData = [
    {
      logo: "PortFolio",
      links: ["Home", "Services","Projects", "Contact"],
      btnText: "Search",
    },
  ];

  return (
    <motion.div className={styles.NavbarItems}>
      {navbarData.map((item, index) => (
        <div key={index} className={styles.Row}>
          <div className={styles.Logo}>{item.logo}</div>

          <div className={styles.Links}>
            {item.links.map((link, index) => (
              <div key={index} className={styles.Link}>
                {link}
              </div>
            ))}
          </div>

          <motion.div className={styles.Button} whileHover={{ scale: 0.95 , textShadow: "0px 0px 8px #49c092", boxShadow: "0px 0px 8px #49c092"}}>
            <button>{item.btnText}</button>
          </motion.div>
          <div className={styles.hamburgerMenu}>
            <HamburgerMenu />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default NavbarItems;
