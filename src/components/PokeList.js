import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from "prop-types";


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


PokeList.propTypes = {
  imagen:PropTypes.string,
  name:PropTypes.string,
  types:PropTypes.string,
  Pokemon: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default PokeList;
