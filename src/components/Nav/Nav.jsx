import SearchBar from '../SearchBar/SearchBar.jsx'
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props){

return (
    
        <nav className={styles.barra}>
            <button className={styles.bttn} onClick={props.logout}>LOGOUT</button>
            <div>
            <Link className={styles.links} to='/home'>Home</Link>
            <Link className={styles.links} to='/about'>About</Link>
            </div>
            <SearchBar onSearch={props.onSearch}/>
        </nav>
        
    );
}