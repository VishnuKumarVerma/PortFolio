import styles from "./Services.module.css";
import ServicesItems from "./ServicesItems";
import servicesIconOne from "../../assets/servicesIconOne.png";
import servicesIconTwo from "../../assets/servicesIconTwo.png";
import servicesIconThree from "../../assets/servicesIconThree.png";
const Services = () => {
  const servicesData = [
    {
      icon: servicesIconOne,
      title: "Web Developer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque rerum, recusandae exercitationem soluta tempore ut facilis animi corporis ipsum debitis architecto neque. Maxime ullam eius fugit tempora. Nobis, nam!",
    },

    {
      icon: servicesIconTwo,
      title: "UI/Ux Designer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque rerum, recusandae exercitationem soluta tempore ut facilis animi corporis ipsum debitis architecto neque. Maxime ullam eius fugit tempora. Nobis, nam!",
    },

    {
      icon: servicesIconThree,
      title: "Graphics Designer",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque rerum, recusandae exercitationem soluta tempore ut facilis animi corporis ipsum debitis architecto neque. Maxime ullam eius fugit tempora. Nobis, nam!",
    },
  ];

  return (
    <div className={styles.Services}>
      <div className={styles.servicesTitle}>
        <h3>
          My <span>Services</span>
        </h3>
        <h1>What I Do</h1>
      </div>
      <div className={styles.ServicesItemsClass}>
        {servicesData.map((items, index) => {
          return <ServicesItems key={index} {...items} />;
        })}
      </div>
    </div>
  );
};

export default Services;
