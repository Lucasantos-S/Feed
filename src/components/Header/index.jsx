import React from "react";
import styles from "../Header/Header.module.css";

import ignitLogo from "../../assets/ignit-logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img src={ignitLogo} alt="logotipo do ignit" />
        <strong>Ignit feed</strong>
      </div>
    </div>
  );
}
