import React from "react";
import Livro from "../Livro/livro.jsx";
import Data from "../../Data/data.js";
import styles from "../List/list.module.css";




function List({livros}) {
  
    return (
    <>
      <div className={styles.list}>
        {
        
        livros.map((list) => (
          
          <Livro
            titulo={list.titulo}
            autor={list.autor}
            ano={list.ano}
            description={list.description}
            capa={list.capa}
            genero={list.genero}
    
          />
        ))}
      </div>
    </>
  );
}

export default List;    