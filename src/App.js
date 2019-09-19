import React from 'react';
import './App.scss';
import Pokemon from './Pokemon';
import PokeList from './components/PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Pokemon:Pokemon
    }
  }

  render() {
    return (
      <div className="App">
        <PokeList Pokemon={this.state.Pokemon}/>
      </div>
    );
  }
}

export default App;
