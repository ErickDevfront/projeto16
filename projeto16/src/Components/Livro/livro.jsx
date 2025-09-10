import React from 'react';
import styles from '../Livro/livro.module.css';

function Livro({ titulo, autor, ano, description, capa, genero  }) {
  return (
    <>
    <div className={styles.livros}>
       <img src={capa} alt={titulo} />
       <h3>Titulo</h3>
       
       <h1>{titulo}</h1>
       <h3>Autor</h3>
       <h2>{autor}</h2>
       <h3>Ano</h3>
       <h4>{ano}</h4>
       <h3>Genero</h3>
       <h4>{genero}</h4>
       <h3>Descrição</h3>
       <p>{description}</p>

    </div>
    </>
  );
}

export default Livro;