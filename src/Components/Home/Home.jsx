import styles from "./Home.module.css";
import homeImage from "../../assets/homeImage.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const homeData = [
    {
      topPara: "Hello, ",
      name: "Vishnu Kumar Verma",
      bio: "Web Developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda at nobis accusamus! Vel dolore quaerat minus, laboriosam quam distinctio provident modi itaque earum eum molestias ducimus aliquid, nisi magnam in.",
      btnText: "Let's Talk",
      socialLinks: [
        <FaLinkedin key="linkedin" />,
        <FaGithub key="github" />,
        <FaTwitter key="twitter" />,
      ],
      homeImage: homeImage,
    },
  ];

  return (
    <motion.div
      className={styles.homeContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={styles.leftSide}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6}}
      >
        <p>
          {homeData[0].topPara} <span>i&apos;m</span>
        </p>
        <motion.h1>{homeData[0].name}</motion.h1>
        <p>{homeData[0].bio}</p>
        <p className={styles.homeParaClass}>{homeData[0].para}</p>
        <motion.button initial={{ x: "-100vw" }} animate={{ x: 0 }}>
          {homeData[0].btnText}
        </motion.button>
        <div className={styles.socialLinks}>
          <div>
            <p>Check Out My</p>
          </div>
          <div className={styles.links}>
            {homeData[0].socialLinks.map((items, index) => {
              return (
                <a href="#" key={index}>
                  {items}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.div
        className={styles.rightSide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <img src={homeData[0].homeImage} alt="Home Image" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
