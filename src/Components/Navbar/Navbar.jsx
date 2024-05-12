import styles from "./Navbar.module.css";
import NavbarItems from "./NavbarItems";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      className={styles.navbarClass}
     
    >
      <NavbarItems />
    </motion.div>
  );
};

export default Navbar;
