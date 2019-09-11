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
                        imagen={Pokemon.url}
                        name= {Pokemon.name}
                        types={Pokemon.types}
                        />

       
                     </li>);
            })
            }
        </ul>
    );
    }
}

export default PokeList;
