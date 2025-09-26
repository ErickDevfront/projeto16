
import Card from "../../Components/Card/card";
import { herosForça, herosAgilidade, herosInteligência } from "../../data/dadosDeherois";
import styles from "../../Components/Footer/footer.module.css";


function MainDota2() {
  return (
    
    <div className={styles.footer}>
      <p>© 2024 Dota 2. Todos os direitos reservados.</p>
      <p>Desenvolvido por Eks.</p>
    </div>
  );
}

export default MainDota2;