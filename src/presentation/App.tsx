import React from "react";

import styles from "./App.module.scss";
import { HomeGrid } from "./components";

function App() {
  return (
    <main>
      <div className={styles.cognizantBackground} />
      <HomeGrid />
    </main>
  );
}

export default App;
