import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={styles.divGral}>
         <button className={styles.boton} onClick={props.onClose}>X</button>
         <div className={styles.container}>
            <div className={styles.titulo}>
            <Link to={`/detail/${props.id}`}>
         <h2 className={styles.name}>{props.name}</h2>
            </Link>
            </div>
         <img  className={styles.imagen} src={props.image} alt="Cartas" />
         </div>
         <div className = {styles.specieGender}>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
