import { NavLink } from "react-router-dom";
import React, { Fragment } from "react";
import styles from "./Drawer.module.css";
import profile from '../asset/profile_pic.jpg';
const Drawer = (props) => {
  const activeHander = ({ isActive }) => {
    return {
      color: isActive ? "#6DBCDB" : "#fff",
    };
  };
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={profile} alt="Profile_pic" />
          <p>
            GaneshKumar<span className={styles.initial}>Marimuthu</span>
          </p>
          <span>“Make it work, make it right, make it fast.”</span>
        </div>
        <div className={styles.lists}>
          <NavLink to="/home" style={activeHander}>
            Home
          </NavLink>
          <NavLink to="/projects" style={activeHander}>
            Projects
          </NavLink>
          <NavLink to="certificates" style={activeHander}>
            Certificates
          </NavLink>
          <NavLink to="/about" style={activeHander}>
            About
          </NavLink>
          <NavLink to="/contact" style={activeHander}>
            Contact me
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Drawer;
