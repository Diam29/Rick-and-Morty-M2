import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards(props) {
const { characters } = props;
let i = 0;
return (<div className={styles.Cards}>
      {characters.length === 0 ? (<p style={{color: 'rgb(118, 237, 138)', marginTop: '150px', fontSize: '35px' }}>BUSCA UN PERSONAJE</p>) : 
      (characters.map(cht=> (< Card 
      id={cht.id}
      name={cht.name} 
      species={cht.species} 
      gender={cht.gender} 
      image={cht.image} 
      onClose={() => props.onClose(cht.id)}
      key={i++} 
      />
      )))}
      </div>
);
}
