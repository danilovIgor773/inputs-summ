import React, {Component} from 'react';
import './App.css';
import Raws from '../src/components/container/Raws';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Hello world!</h1>
        <Raws />
    </div>
    );
  }
}

export default App;
