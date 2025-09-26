
import Card from "../../Components/Card/card";
import { herosForça, herosAgilidade, herosInteligência } from "../../data/dadosDeherois";
import styles from "./maindota2.module.css";

function MainDota2() {
  return (
    
    <div className={styles.container}>
      <h1 className={styles.title}>Heróis do Dota 2</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Heróis de Força</h2>
        <div className={styles.cardContainer}>
          {herosForça.map((hero) => (
            <Card key={hero.id} hero={hero} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Heróis de Agilidade</h2>
        <div className={styles.cardContainer}>
          {herosAgilidade.map((hero) => (
            <Card key={hero.id} hero={hero} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Heróis de Inteligência</h2>
        <div className={styles.cardContainer}>
          {herosInteligência.map((hero) => (
            <Card key={hero.id} hero={hero} />
          ))}
        </div>
      </section>


         <div>
      <h1>Lore do Dota 2</h1>

      {/* O objeto é criado e passado diretamente na prop 'hero' */}
      <Card hero={{
        img: "https://cdn.cloudflare..com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
        nome: "historia do dota 2",
        lore: "Uma história simples e direta sobre a maga do gelo."
      }} />
    </div>
  



    

    </div>
  );
}

export default MainDota2;
