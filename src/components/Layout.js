import React from "react";
import Drawer from "./Drawer";
import Home from '../pages/Home';
import styles from './Layout.module.css';
const Layout = props =>{
    return <div className={styles.layout}>
        <Drawer />
        <Home />
    </div>;
};

export default Layout;