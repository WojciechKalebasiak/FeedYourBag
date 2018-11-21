import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
export default function Logo() {
  return (
    <li>
      <img src={logo} alt="logo" className={styles.Logo} />
    </li>
  );
}
