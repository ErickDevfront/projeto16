
import Card from "../../Components/Card/card";
import { herosForça, herosAgilidade, herosInteligência } from "../../data/dadosDeherois";
import styles from "../../Components/Header/header.module.css";

function MainDota2() {
  return (
    <div className={styles.header}>
      <h4>Bem-vindo ao Site:  Dota 2 </h4>
      <home><button><a href="./">Home</a></button></home>
      <login><button><a href="./login">Login</a></button></login>
      <cadastro><button><a href="./cadastro">Cadastro</a></button></cadastro>
      <nav>
        <ul className={styles.navList}>
          <li><a href="./força">Força</a></li>
          <li><a href="./agilidade"> Agilidade</a></li>
          <li><a href="./inteligência"> Inteligência</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainDota2;