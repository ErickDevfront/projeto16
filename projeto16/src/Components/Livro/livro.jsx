import React from 'react';
import styles from '../Livro/livro.module.css';

function Livro({ titulo, autor, ano, description, capa, genero  }) {
  return (
    <>
    <div className={styles.livros}>
       <img src={capa} alt={titulo} />
       <h1>{titulo}</h1>
       <h2>{autor}</h2>
       <h3>{ano}</h3>
        <h4>{genero}</h4>
       <p>{description}</p>
       
    </div>
    </>
  );
}

export default Livro;