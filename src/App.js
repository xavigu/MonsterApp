import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
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

 /* Metodo (handleChange) que apunta a la arrow function y 
  en el que this su contexto es el class Component*/
 handleChange = (e) => {
  this.setState({searchField: e.target.value})
 }
 
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
                                             monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        {/* <input type='search' 
               placeholder='Search monsters...' 
               onChange={e => this.setState({searchField: e.target.value})} /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox 
                placeholder='Search monsters...'
                handleChange = {this.handleChange}/> { /* Se puede escribir asi porque se le esta pasando el callback entero y hace referencia a toda la función incluido el (e)*/ }    
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
