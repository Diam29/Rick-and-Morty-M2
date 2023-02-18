import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar(props) {

   const [char, setChar] = useState(0);

   const handleSearch = (event) =>{
      let {value} = event.target;
      setChar(value);
   };



   return (
      <div>
         <input className={styles.barra} type='search' onChange={handleSearch}/>
      <button className={styles.botonBar} onClick={()=>props.onSearch(char)} >Agregar</button>
      {/*<button className={styles.botonBar} onClick={props.random}>
      Random Character
      </button>*/}
      </div>
   );
}
