import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = props => {
 console.log("Props: ", props);
 return <div className="card-list">
         {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/> //Por cada iteracción de monster se creara un cardComponent pasandole las propiedades key y monster
         ))}
       </div>
};
