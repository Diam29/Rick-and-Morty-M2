import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar({onSearch}) {

   const [char, setChar] = useState('');

   const handleSearch = (event) =>{
      
      setChar(event.target.value);
   };

   const onSubmit = (e)=> {
      e.preventDefault();
      setChar('');
   }



   return (
      <form onSubmit={onSubmit}>
      <div>
         <input className={styles.barra} type='search' value={char} onChange={handleSearch} placeholder='Ingresa un número'/>
      <button className={styles.botonBar} onClick={()=>onSearch(char)} >Agregar</button>
      </div>
      </form>
   );
}
