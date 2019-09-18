import React from 'react';
import Pokemon from './Pokemon';



class PokeList extends React.Component {
render() {
  return (
    <ul className="cards__list">
    {this.props.Pokemon.map((list) => {
      return (
        <li className="card__list-elements" key={list.id}>
            <Pokemon 
            imagen={list.url}
            name= {list.name}
            types={list.types}
            />
          </li>);
    })
    }
    </ul>
  );
}
}

export default PokeList;
