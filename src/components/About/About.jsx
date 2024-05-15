import React from "react";
import { getImageurl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}><img src={getImageurl("about/new3.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}></img>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("about/cursorIcon.png")} alt="Cursor icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive
                            and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("about/serverIcon.png")} alt="Server icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive
                            and optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageurl("about/uiIcon.png")} alt="Ui icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive
                            and optimized sites
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}