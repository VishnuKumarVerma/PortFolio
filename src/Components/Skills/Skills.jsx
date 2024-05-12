import styles from "./Skills.module.css";
import skillsOne from "../../assets/skillOne.gif";
import skillsTwo from "../../assets/skillOne.gif";
import skillsThree from "../../assets/skillOne.gif";
import skillsFour from "../../assets/skillOne.gif";
import skillsFive from "../../assets/skillOne.gif";
import skillsSix from "../../assets/skillOne.gif";
import skillsSeven from "../../assets/skillOne.gif";
import skillsEight from "../../assets/skillOne.gif";
import skillsNine from "../../assets/skillOne.gif";
import skillsTen from "../../assets/skillOne.gif";
import skillsEleven from "../../assets/skillOne.gif";
import skillsTwelve from "../../assets/skillOne.gif";

const Skills = () => {
  const gifArray = [
    skillsOne,
    skillsTwo,
    skillsThree,
    skillsFour,
    skillsFive,
    skillsSix,
    skillsSeven,
    skillsEight,
    skillsNine,
    skillsTen,
    skillsEleven,
    skillsTwelve,
  ];

  return (
    <div className={styles.Skills}>
      {gifArray.map((gif, index) => (
        <img
          key={index}
          src={gif}
          alt={`skill-${index}`}
          className={styles.Skill}
        />
      ))}
    </div>
  );
};
export default Skills;
