import styles from "./Experience.module.css";
import { useState } from "react";
import Modal from "react-modal";
// import expBackground from "../../assets/expBackground.mp4";
import expOne from "../../assets/internship.png";
import expTwo from "../../assets/hackathon.png";
import expThree from "../../assets/webDev.png";
import expFour from "../../assets/programming.png";
import expFive from "../../assets/webDesign.png";
import expSix from "../../assets/graphicDesigning.png";
import expSeven from "../../assets/videoEditing.png";
import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";

const Experience = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state variable

  const data = [
    {
      id: 1,
      image: expOne,
      title: "HackAthons",
      date: "January 2022",
      achievements: "Achievements 1",
    },
    {
      id: 2,
      image: expTwo,
      title: "Internship",
      date: "February 2022",
      achievements: "Achievements 2",
    },
    {
      id: 3,
      image: expThree,
      title: "Web Developer",
      date: "March 2022",
      achievements: "Achievements 3",
    },
    {
      id: 4,
      image: expFour,
      title: "Programming",
      date: "April 2022",
      achievements: "Achievements 4",
    },
    {
      id: 5,
      image: expFive,
      title: "Web Designer",
      date: "May 2022",
      achievements: "Achievements 5",
    },
    {
      id: 6,
      image: expSix,
      title: "Ui/Ux Designer",
      date: "June 2022",
      achievements: "Achievements 6",
    },
    {
      id: 7,
      image: expSeven,
      title: "Video and Photo Editor",
      date: "July 2022",
      achievements: "Achievements 7",
    },
  ];

  const openModal = (item) => {
    setSelectedCard(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.Experience}>
      {/* <video autoPlay loop muted>
        <source src={expBackground} />
      </video> */}
      <div className={styles.experienceButton}>
        <h1>Experiences</h1>
      </div>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div key={item.id} className={styles.Card}>
            <div
              className={styles.Image}
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={styles.Overlay}>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.achievements}</p>

              <div className={styles.knowMore} onClick={() => openModal(item)}>
                <h3>click to More</h3>
                <div className={styles.icon}>
                  <FaMagnifyingGlassArrowRight />
                </div>
              </div>
            </div>
            <span className={styles.Number}>{item.id}</span>
          </div>
        ))}
      </div>
      <Modal
        className={styles.ModalContainer}
        isOpen={isModalOpen} // Use the new state variable
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 9999,
          },
        }}
      >
        {selectedCard && (
          <div>
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.date}</p>
            <p>{selectedCard.achievements}</p>
            {/* Add links or additional content here */}
            <button className={styles.CloseButton} onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Experience;
