import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
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
          <Post/>
        </main>
      </div>
    </div>
  );
}
