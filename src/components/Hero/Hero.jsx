import React from "react";

import styles from "./Hero.module.css";
import { getImageurl } from "../../utils";

export const Hero = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}> Hi, I'm Maleesha </h1>
                <p className={styles.description}>
                I am an ambitious undergraduate student pursuing a BSc (Hons) in Computer Science at the University of Westminster, Institute of Information Technology (IIT).
                {/* I am dedicated to expanding my knowledge and skills in the field of computer science. Eager to contribute to innovative projects and collaborate with industry professionals, 
                I am committed to achieving academic and professional success. */}
                </p>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageurl("hero/mypick2.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>

    )
}