import React, { Component } from "react";
import "./reset.css";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
  }

  dropMenu = () => {
    let {current} = this.dropdown

    if(current.classList.contains('show-animation')){
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="logo">Start Bootstrap</h1>
          <button className="menu" onClick={this.dropMenu}>
            <i className="fas fa-bars">menu</i>
          </button>
          <nav className="nav">
            <div className="navList">SERVICES</div>
            <div className="navList">PORTFOLIO</div>
            <div className="navList">ABOUT</div>
            <div className="navList">TEAM</div>
            <div className="navList">CONTACT</div>
          </nav>
          <div className='dropDown' ref={this.dropdown}>
          <div className="navList">SERVICES</div>
            <div className="navList">PORTFOLIO</div>
            <div className="navList">ABOUT</div>
            <div className="navList">TEAM</div>
            <div className="navList">CONTACT</div>
          </div>
        </header>
        <div className="topDisplay" />
      </div>
    );
  }
}

export default App;
