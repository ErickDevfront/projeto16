
import styles from "./card.module.css";
import {useState} from "react"



function Card({ hero, historia}) {
const {count,setCount} = useState(0);
  return (
    <>
      const {hero} = {hero};

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
      const {historia} 

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>

      <h1>Heroi: {hero.nome}</h1>
      <h2>Historia: {historia}</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
      <div className={styles.card}>
        <img src={hero.img} alt={hero.nome} />
        <h2>{hero.nome}</h2>
        <p>Força: {hero.força}</p>
        <p>Agilidade: {hero.agilidade}</p>
        <p>Inteligência: {hero.inteligência}</p>
      <p>Historia do dota 2: {hero.lore}</p>
      <button><a href="url: ">Saiba mais</a></button>
    </div>

    




    






    </>
  );
}






export default Card;




