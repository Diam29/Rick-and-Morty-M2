import './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorite from './components/Favorite/Favorite'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false)
  const username = 'diamela@gmail.com';
  const password = '1234abcD';

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Nombre de usuario y clave son incorrectos');
    }
  }

  function logout() {
    setAccess(false);
  }



  function onSearch(char) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${char}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters?.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert('Personaje repetido, prueba otro ID.')
          /*if (data.id) {
            setCharacters((characters) => [...characters, data]);*/
        } else {
          alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id))
  }



  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route exact path='/' element={<Form login={login} />}></Route>
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/detail/:detailId' element={<Detail />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
      </Routes>
    </div>
  )
}

export default App;
