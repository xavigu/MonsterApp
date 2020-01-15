import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankestein',
          id: 1
        },
        {
          name: 'Dracula',
          id: 2
        },
        {
          name: 'Zombie',
          id: 3
        },
      ]
    }
  }
 
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name}</h1>) //map hace un return de la función que le pasemos iterando por cada objeto del array monsters
        }
      </div>
    );
  }
}

export default App;
