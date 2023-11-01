import { Header } from "./components/Header/Header";
import { Post, PostType } from "./components/Post/Post";
import { Sidebar } from "./components/SideBar/Sidebar";
import styles from "./App.module.css";

import "./global.css";




const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Sh4rk-dev.png",
      name: "Renan Rapace",
      role: "Student Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala Devs 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. Para quem quiser dar uma olhada, o nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-10-23 12:47:32"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ro-fontes.png",
      name: "Rodigro Fontes",
      role: "Full Stack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de finalizar mais um projeto incrível. É um projeto que fiz no NLW no evento da Rocketseat, que por sinal, foi um evento muito bacana. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-10-23 12:51:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
