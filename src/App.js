import React, { Component } from 'react';
import './App.css';
import DataList from './components/dataList.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      appList: []
    }
  }

  componentDidMount() {
    this.getMetaCopy()
  }

  getMetaCopy = () => {
    return fetch("http://127.0.0.1:3306/", { mode: 'no-cors' })
    .then(response => response.json)
    .then(res => {
      this.setState({
        appList: res
      })
    })
  }

  render() {
    return (
      <div>
        <div className="jumbotron welcome">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">This is Project Arthur</p>
          <hr className="my-4" />
          <p>A tool is designed to make app approvals easier by consolidating all the data needed.</p>
        </div>
        <div>
          <DataList applist={this.state.appList} />
        </div>
      </div>
    );
  }
}

export default App;
