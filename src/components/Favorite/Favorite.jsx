import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";
import styles from './Favorite.module.css'


const Favorite = () =>{

    const myFavorites = useSelector(state => state.myFavorites);

    const dispatch = useDispatch()

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return (
        
        <div className={styles.gral}>
            <div>
                <select onChange={handleOrder}>
                    <option value="Order" disabled="disabled">Ordena por: </option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Filter" disabled="disabled">Filtra por: </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Gnederless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            {
            myFavorites.map((char)=>{
                return(
                    <div className={styles.container}>
                        <div className={styles.titulo}>
                        <Link to={`/detail/${char.id}`}>
                            <h2 className={styles.name}>{char.name}</h2>
                            </Link>
                            </div>
                            <img className={styles.imagen} src={char.image} alt="Cartas" />
                            <div className={styles.specieGender}>
                            <h2>{char.species}</h2>
                            <h2>{char.gender}</h2>
                            </div>
                    </div>
                    )
                })
            }
        </div>
)}

export default Favorite;
