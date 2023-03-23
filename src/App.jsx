import styles from "./App.module.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <Post/>
      </div>
    </div>
  );
}

export default App;
