import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    console.log('inside CDM')
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
