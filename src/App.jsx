import styles from "./App.module.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <Feed/>
      </div>
    </div>
  );
}

export default App;
