import React from 'react';
import styles from './PageExemplo.module.css';

function PageExemplo({ titulo, children }) {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>{titulo}</h1>
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}

export default PageExemplo;