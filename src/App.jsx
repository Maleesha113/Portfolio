import styles from "./App.module.css";
import { Hero } from "./components/Navbar/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
