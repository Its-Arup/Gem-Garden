import React from "react";
// import styled from 'styled-components'
import heroimg from "../Assets/Hero_image.jpg";
import styles from "../Css/hero_section.module.css";

function HeroSection() {
  return (
    <div className={styles.hero_img}>
      <div className={styles.hero_text}>
        <h1 className={styles.hero_heading}>
          Your Jewlry Search <br />
          Starts Here
        </h1>
        <p className={styles.hero_description}>
          Discover the perfect jewlry pieces <br />
          for your uique style at our store
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
