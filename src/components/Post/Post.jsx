import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ro-fontes.png" />
          <div className={styles.authorInfo}>
            <strong>Renan Rapace</strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="13 de Março às 09:12h" dateTime="2023-03-13 09:12:47">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 {""} <a href="">jane.design/doctorcare</a>
        </p>{" "}
        {""}
        <p>
          <a href="">#novoprojeto</a> {""}
          <a href="">#nlw</a> {""}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário..." />

        <footer>
          <button type="Submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}