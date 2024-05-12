import styles from "./ServicesItems.module.css";
import PropTypes from 'prop-types';

const ServicesItems = ({ icon, title, para }) => {
  return (
    <div className={styles.ServicesItems}>
      <div className={styles.icon}><img src={icon} alt="" /></div>
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};


ServicesItems.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default ServicesItems;