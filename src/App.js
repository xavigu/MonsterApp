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
 
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
                                             monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        {/* <input type='search' 
               placeholder='Search monsters...' 
               onChange={e => this.setState({searchField: e.target.value})} /> */}
        <SearchBox 
                placeholder='Search monsters...'
                handleChange = {e => this.setState({searchField: e.target.value})}/>       
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
