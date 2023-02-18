import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards(props) {
const { characters } = props;
let i = 0;
return (<div className={styles.Cards}>
      {characters.length === 0 ? (<p style={{color: 'rgb(96, 158, 162)', marginTop: '150px', fontSize: '55px' }}>Podes  buscar  un  personaje</p>) : 
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
