import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions';



export default function Card(props) {

   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites);

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = ()=>{
      if (isFav){
         setIsFav(false)
         dispatch(deleteFavorite(props.id))
      }else{
         setIsFav(true)
         dispatch(addFavorite(props))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.divGral}>
         {
            isFav ? (
               <button className={styles.botonFav} onClick={handleFavorite}>❤️{props.addFavorite}</button>
            ) : (
               <button className={styles.botonFav} onClick={handleFavorite}>🤍{props.deleteFavorite}</button>)
         }
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
