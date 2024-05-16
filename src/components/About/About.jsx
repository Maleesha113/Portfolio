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
                    <img className={styles.img} src={getImageurl("about/pointer.png")} alt="Cursor icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Eager to Apply Expertise in Practical Projects</h3>
                        <p>
                        An ambitious undergraduate computer science student with a strong background in software development, programming, and algorithms, eager to apply their expertise in practical projects.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.img} src={getImageurl("about/server.png")} alt="Server icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Fluent in Multiple Programming Languages</h3>
                        <p>
                        Gained fluency in Python, Java, HTML, CSS, JS, PHP, SQL and React JS through courses.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.img} src={getImageurl("about/UI.png")} alt="Ui icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Team-Oriented and Challenge-Driven</h3>
                        <p>
                        Enjoys working in groups, seeking challenges, and is dedicated to becoming the best computer scientist.
                        </p>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    )
}