import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from "./Comment.module.css";
import Avatar from "../Avatar";

export default function Comment({ content, index, comment, setComments }) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://d30-invdn-com.investing.com/company_logo/69ffbad2d7adfbc8a3523395d55ac9ab.jpg?width=170&height=170"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dioguinho</strong>
              <time title="11 de Maio ás 08:13" dateTime="2822-05-11 08:13:38">
                Cerca de 1hora atrás
              </time>
            </div>

            <button title="deletar comentario" onClick={() => {}}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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
