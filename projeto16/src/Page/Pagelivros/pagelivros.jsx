import React from "react";
import styles from "./pagelivros.module.css";
import Data from "../../Data/data.js";
import List from "../../Components/List/list.jsx";



function PageLivros() {
  return (
    <>
    <div className={styles.pagelivros}>
      <List livros={Data}
      />
    </div>
    </>
  );
}

export default PageLivros;  