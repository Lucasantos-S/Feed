import { PencilLine } from "phosphor-react";
import React from "react";
import styles from "../SideBar/SideBar.module.css";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/84051326?v=4"
        />
        <strong>Lucas Silva</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
