import React from "react";
import { format, formatDistanceToNow } from "date-fns";

import { ptBR } from "date-fns/locale";

import Avatar from "../Avatar";
import Comment from "../Comment";

import styles from "./Post.module.css";

export default function Post({ author, publisher, content }) {
  const [comments, setComments] = React.useState([
    { id: 1, comment: "Post muito bom" },
  ]);
  const [value, setValue] = React.useState("");

  const publisheFormatDate = format(publisher, "hh 'de' MMMM 'ás' hh:mm'h'", {
    locale: ptBR,
  });

  const publisheDateRelativeToNow = formatDistanceToNow(publisher, {
    locale: ptBR,
    addSuffix: true,
  });

  const renderContent = React.useMemo(() => {
    return content.map((line) => {
      if (line.type === "paragraph") {
        return <p key={line.content}>{line.content}</p>;
      } else {
        return (
          <p key={line.content}>
            <a href="#">{line.content}</a>
          </p>
        );
      }
    });
  }, [content]);

  function handleCreateNewComment(event) {
    event.preventDefault();
    if (!value) return null;
    setComments([...comments, { id: comments.length + 1, comment: value }]);
    setValue("");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publisheFormatDate} dateTime={publisher.toISOString()}>
          {publisheDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>{renderContent}</div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixei seu feedback</strong>
        <textarea
          value={value}
          placeholder="Deixe seu comentário"
          onChange={(event) => setValue(event.target.value)}
        />
        <footer>
          {!value ? (
            <button
              disabled
              style={{ opacity: 0.5, cursor: "not-allowed" }}
              type="submit"
            >
              Publicar
            </button>
          ) : (
            <button type="submit">Publicar</button>
          )}
        </footer>
      </form>
      <div className={styles.CommentList}>
        {comments.map(({ comment, id }) => (
          <Comment content={comment} key={id} />
        ))}
      </div>
    </article>
  );
}
