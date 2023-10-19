import { Header } from "./components/Header/Header";
import { Post } from "./components/Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Renan Rapace"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae asperiores exercitationem corporis. Aliquid provident quaerat corrupti explicabo nulla ullam odit minus quos, consequuntur recusandae porro voluptatem unde sunt pariatur?"
      />
    </div>
  );
}
