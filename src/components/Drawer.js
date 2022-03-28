import React, { Fragment } from "react";
import styles from "./Drawer.module.css";
const Drawer = (props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="./profile_pic.jpg" alt="Profile_pic" />
          <p>GaneshKumar<span className={styles.initial}>Marimuthu</span></p>
          <span>“Make it work, make it right, make it fast.”</span>
        </div>
        <ul className={styles.lists}>
          <li>Home</li>
          <li>Projects</li>
          <li>Certificates</li>
          <li>About</li>
          <li>Contact me</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Drawer;
