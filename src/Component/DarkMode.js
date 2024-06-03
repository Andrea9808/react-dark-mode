
import React, {useState, useEffect} from 'react';
import data from '../data';
import Articolo from './Articolo'

const getFromLocalStorage = () => {
    if(localStorage.getItem('darkMode')){
        return localStorage.getItem('darkMode');
    }else {
        return 'light-mode';
    }
};

const DarkMode = () => {

const [darkMode, setDarkMode] = useState(getFromLocalStorage());


//funzione che cambia il tema
const changeMode = () => {
    if(darkMode === 'light-mode'){
        setDarkMode('dark-mode');
    } else {
        setDarkMode('light-mode');
    }
};


//al mutare del tema cambia il colore di sfondo
useEffect(() => {
    document.documentElement.className = darkMode;

    //localStorage
    localStorage.setItem('darkMode', darkMode);

}, [darkMode]);

  return (
    <section className="section-center">
    <div className="container">
      <button className="btn" onClick={changeMode}>
        Cambia
      </button>

      <section className="article-section">
        {data.map((el) => (
          <Articolo key={el.id} {...el} />
        ))}
      </section>
    </div>
  </section>
  )
}

export default DarkMode
