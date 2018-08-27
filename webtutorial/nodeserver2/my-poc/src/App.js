import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="container">
            <div class="row">
              <div class="col-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </div>
            </div>
        </div>
        <Person firstName="JF" lastname="Pelletier" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


class Person extends Component{
  render(){
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-el-1">First name:{this.props.firstName}</div>
          <div class="col-12 col-sm col-md-6 col-l col-el-1">Last name:{this.props.lastname}</div>
          <div class="col-el-auto"></div>
        </div>
      </div>
    );
  }
}

export default App;
