import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Pagination, A11y } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Projects.module.css";

import projectsOne from "../../assets/projectsOne.svg";
import projectsTwo from "../../assets/projectsTwo.svg";
import projectsThree from "../../assets/projectsThree.svg";
import projectsSix from "../../assets/projectsFour.svg";
import projectsFour from "../../assets/projectsFive.svg";
import projectsFive from "../../assets/projectsSix.svg";

const Projects = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 769 ? 1 : 3);
    };
  
    window.addEventListener("resize", handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides = [
    { title: "Ecommerce", image: projectsOne },
    { title: "Social Media", image: projectsTwo },
    { title: "Helthcare Sites", image: projectsThree },
    { title: "NFTs", image: projectsFour },
    { title: "Shopping Sites", image: projectsFive },
    { title: "Gaming Sites", image: projectsSix },
  ];

  return (
    <div className={styles.projects}>
      <div className={styles.projectsHead}>
        <h1>Recent Projects</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut sit consequuntur ullam facere, dicta eos cum sapiente ipsum delectus!</p>
      </div>
      <Swiper
        modules={[EffectCoverflow, Pagination, A11y]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div
              className={styles.slideContent}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <a href="#" className={styles.link}>
                {slide.title}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
