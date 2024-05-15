import React from "react";

import styles from "./Contact.module.css";
import { getImageurl } from "../../utils";


export const Contact = () => {
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links} >
                <li className={styles.link}>
                    <img className={styles.img} src={getImageurl("contact/gmail.png")} alt="Email Icon"></img>
                    <a href="mailto:shavindimalee@email.com">myemail@email.com</a>
                </li>
                <li className={styles.link}>
                    <img className={styles.img} src={getImageurl("contact/linkedin.png")} alt="Linkedin Icon"></img>
                    <a href="https://www.linkedin.com/in/maleesha-shavindi-ab0287259/">linkedin.com/MaleeshaShavindi</a>
                </li>
                <li className={styles.link}>
                    <img className={styles.img} src={getImageurl("contact/github.png")} alt="Github Icon"></img>
                    <a href="https://github.com/dashboard">github.com/MaleeshaShavindi</a>
                </li>
            </ul>
        </footer>
    );
}