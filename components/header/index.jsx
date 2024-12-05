"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import logo from "../../public/logo-img.png";
import { useState } from "react";
import Nav from "./nav/index";
import { AnimatePresence } from "framer-motion";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const closeNavBar = () => {
    setIsActive(prevState => !prevState);
  }
  return (
    <div className="">
      {/* <Image src={logo} alt="logo" width={80} height={80} /> */}
      <div className={`flex justify-between items-center ${styles.header}`}>
        <div onClick={() => setIsActive(!isActive)} className={styles.button}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav closeNavBar={closeNavBar} />}</AnimatePresence>
      </div>
    </div>
  );
}
