import { Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Services } from "./Services";
import { World } from './world';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faUnlock, faArrowUp, faEuro, faTimes } from '@fortawesome/free-solid-svg-icons'
import Product from './Product';
import { transform } from "./utils"

function App() {
  const [services, setServices] = useState(new Services(""));
  const [world, setWorld] = useState(new World());
  useEffect(() => {
    let services = new Services("Agathe")
    setServices(services)
    services.getWorld().then(response => { setWorld(response.data) })
  }, []);
  return (
    <div className="App">
      <nav className="header">
        <img src={services.server + world.logo} />
        <label className="logo">{world.name}</label>
        <ul className="listeHeader">
          <li>{services.user}</li>
          <li>Score : {world.score}</li>
          <li>Money : <span dangerouslySetInnerHTML={{ __html: transform(world.money) }} /> $</li>
        </ul>
      </nav>
      <div className="wrapper">
        <input type="checkbox" id="btn" hidden />
        <label htmlFor="btn" className="menu-btn">
          <i className="fas fa-bars"><FontAwesomeIcon icon={faBars} /></i>
          <i className="fas fa-times"><FontAwesomeIcon icon={faTimes} /></i>
        </label>
        <nav id="sidebar">
          <div className="title">Menu
          </div>
          <ul className="list-items">
            <li><a href="#"><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i>Managers</a></li>
            <li><a href="#"><i className="fas fa-unlock"><FontAwesomeIcon icon={faUnlock} /></i> Unlocks</a></li>
            <li><a href="#"><i className="fas fa-arow-up"><FontAwesomeIcon icon={faArrowUp} /></i>Upgrades</a></li>
            <li><a href="#"><i className="fas fa-euro"><FontAwesomeIcon icon={faEuro} /></i>Investisseurs</a></li>
          </ul>
        </nav>
      </div>
      <div className="products">
        <div><Product prod={world.products.product[0]} services={services} /> </div>
        <div><Product prod={world.products.product[1]} services={services} /></div>
        <div><Product prod={world.products.product[2]} services={services} /></div>
        <div><Product prod={world.products.product[3]} services={services} /></div>
        <div><Product prod={world.products.product[4]} services={services} /></div>
        <div><Product prod={world.products.product[5]} services={services} /></div>
      </div>
    </div>
  );
}

export default App;