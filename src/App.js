import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => {
          console.log(users);
          this.setState({monsters: users})
        })
 }
 
  render() {
    return (
      <div className="App">
        <CardList name="Peter">
        {
          this.state.monsters.map(monster => 
                                     <span className="card" key={monster.id}>
                                        <h1> {monster.name}</h1>
                                        <p>Email: {monster.email}</p>
                                        <p>Company: {monster.company.name}</p>
                                     </span>                              
                                 ) //map hace un return de la función que le pasemos iterando por cada objeto del array monsters
        }
        </CardList> 
      </div>
    );
  }
}

export default App;
