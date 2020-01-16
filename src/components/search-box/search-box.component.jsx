import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input className = 'search'
           type='search' 
           placeholder= {placeholder}
           onChange={handleChange} />
  );
};


//Input previo en el App.js
// <input className = 'search'
// type='search' 
// placeholder= {placeholder}
// onChange={e => this.setState({searchField: e.target.value})} />
