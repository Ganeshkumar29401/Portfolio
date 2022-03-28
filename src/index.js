import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import About from "./pages/About";
import Contact from "./pages/ContactMe";
import Fallback from "./pages/404";
import Drawer from "./components/Drawer";
ReactDOM.render(
  <Fragment>
    <Drawer />
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/certificates" element={<Certificates />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/*" element={<Fallback/>}/>
  </Routes>
  </BrowserRouter>
  </Fragment>,
  document.getElementById("root")
);
