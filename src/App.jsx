import { Header } from "./components/Header/Header";
import { Post } from "./components/Post";
import { Sidebar} from "./components/SideBar/Sidebar"
import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar/>
        <main>
          <Post
            author="Renan Rapace"
            content="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, pariatur. Beatae corporis minima dolore architecto? Adipisci laborum praesentium error ullam doloremque ipsum nemo voluptas dolores minus possimus autem, odit incidunt!"
          />

          <Post
            author="Rodrigo"
            content="
            Esse é um novo post muito bacana"
            />
        </main>
      </div>
    </div>
  );
}
