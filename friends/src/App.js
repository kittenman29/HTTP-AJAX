import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom';

import FriendsForm from './components/FriendsForm'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(err))
  }

  addFriend = (e, friends) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', friends)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <NavLink exact to="/">
            Home
        </NavLink>
        <NavLink to="/friends-form">
            Add Friend
        </NavLink>
        {this.state.friends.map(friend => (
          <div className='friend-card'>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <p>{friend.email}</p>
          </div>
        ))}
        <Route 
          exact
          path="/friends-form"
          render={props => (
            <FriendsForm 
              {...props}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
