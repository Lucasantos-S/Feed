import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./Comment.module.css";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://d30-invdn-com.investing.com/company_logo/69ffbad2d7adfbc8a3523395d55ac9ab.jpg?width=170&height=170" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dioguinho</strong>
              <time title="11 de Maio ás 08:13" dateTime="2822-05-11 08:13:38">
                Cerca de 1hora atrás
              </time>
            </div>

            <button title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom dev, parabéns!!👏👏 </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}