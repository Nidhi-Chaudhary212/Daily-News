import './App.css';
import Header from './components/header';
import React, { Component } from 'react';
import Main from './components/main';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false,
      type: 'light',
      color: 'black',
      bgColor: 'White',
    };
    this.toggleMode = this.toggleMode.bind(this);
  }
  toggleMode() {
    if (this.state.type === 'dark') {
      this.setState({
        bgColor: 'white',
        type: 'light',
        color: 'black',
        darkMode: false,
      });
    } else {
      this.setState({
        bgColor: '#2f2b3a',
        type: 'dark',
        color: 'white',
        darkMode: true,
      });
    }

    if (this.state.darkMode) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#2f2b3a';
    }
  }

  render() {
    return (
      <>
        <div>
          <Header styleState={this.state} toggleMode={this.toggleMode} />
        </div>
        <div className='container'>
          <Main styleState={this.state} toggleMode={this.toggleMode} />
        </div>
      </>
    );
  }
}
