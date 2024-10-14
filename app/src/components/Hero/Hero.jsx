import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Angelita</h1>
        <h1 style={{ fontSize: '30px', color:"white" }}>DATA ANALYST</h1>
        <p className={styles.description}>
          I’m all about roles that focus on accuracy and digging into details,
          like data or business analysis! I love jumping into data to find cool
          insights and help make smart decisions!
        </p>
        <a
          href="https://www.linkedin.com/in/angelita-dumaria-panjaitan-580ab7218/"
          className={styles.contactBtn}
        >
          Keep in touch
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
