import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SideBar from "./components/SideBar";

const post = [
  {
    id: 1,
    author: {
      avatar: "http://github.com/lucasantos-S.png",
      name: "Lucas Santos",
      role: "web developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW",
      },
      { type: "link", content: "https://github.com/Lucasantos-S" },
    ],
    publisher: new Date("2023-03-24 17:35:00"),
  },
  {
    id: 2,
    author: {
      avatar: "http://github.com/lucasantos-S.png",
      name: "Lucas Santos",
      role: "web developer",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW",
      },
      { type: "link", content: "https://github.com/Lucasantos-S" },
    ],
    publisher: new Date("2023-03-24 17:00:00"),
  },
];

function App() {
  const renderPost = React.useMemo(() => {
    return post.map((post) => {
      return (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publisher={post.publisher}
        />
      );
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        {renderPost}
      </div>
    </div>
  );
}

export default App;
