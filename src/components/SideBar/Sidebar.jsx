import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
      className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=100&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/117955877?v=4"  />
        <strong>Renan Rapace</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
            </a>
        </footer>
      </div>
    </aside>
  );
}
