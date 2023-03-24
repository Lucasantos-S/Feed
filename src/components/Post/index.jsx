import React from "react";
import Comment from "../Comment";
import styles from "./Post.module.css";
export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/84051326?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13" dateTime="2822-05-11 08:13:38">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW
        </p>
        <p>Return, evento da Rocketseat. O nome do projeto é DoctorCare</p>
        <p>
          👉 <a href="">Lucas.Silva/dev</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketse</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.CommentList}>
        <Comment />
      </div>
    </article>
  );
}
