import React from 'react';
import './card-list.styles.css'

export const CardList = props => {
 console.log("Props: ", props);
 return <div className="card-list">
         {
          props.monsters.map(monster => 
                                     <span className="card" key={monster.id}>
                                        <h1> {monster.name}</h1>
                                        <p>Email: {monster.email}</p>
                                        <p>Company: {monster.company.name}</p>
                                     </span>                              
                                 )
         }
       </div>
};

