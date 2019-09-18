import React from 'react';


class Pokemon extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="card__list-container">
          <img src={this.props.imagen} alt={this.props.name} className="card__list-container-img"/>
          <p className="card__list-container-name">{this.props.name}</p>
          <ul className="card__list-container-list_properties">{this.props.types.map((type,index) => {
          return (
                <li className="card__list-container-list_properties-item" key={index}>
                <div className="card__list-list_properties-container_text">
                <p className="card__list-container-text">{type}</p>
                </div>
                </li>);
          })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Pokemon;