import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.getMetaCopy()
  }

  getMetaCopy = async() => {
    console.log('Hello World')
  }

  render() {
    return (
      <div className="jumbotron welcome">
        <h1 className="display-4">Welcome</h1>
        <p className="lead">This is Project Arthur</p>
        <hr className="my-4" />
        <p>A tool is designed to make app approvals easier by consolidating all the data needed.</p>
      </div>
    );
  }
}

export default App;
