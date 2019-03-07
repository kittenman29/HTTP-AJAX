import React, { Component } from 'react';
// import axios from 'axios';


class FriendsForm extends Component {
    constructor() {
        super();
        this.state = {
          friend: {
              name: '',
              age: '',
              email: ''
          }
        }
      }

  changeHandler = ev => {
    ev.persist();
    this.setState(prevState => ({
        friend: {
            ...prevState.friend,
            [ev.target.name]: ev.target.value
        }
    }));
  }

  render() {
    return (
      <div className="form">
        <form className='friend-form' onSubmit={(e) => this.props.addFriend(e, this.state.friend)}>
            <h3>Add Friend</h3>
            <input 
              type='text'
              name='name'
              placeholder='Name'
              onChange={this.changeHandler}
              value={this.state.name}
            />
            <input 
              type='text'
              name='age'
              placeholder='Age'
              onChange={this.changeHandler}
              value={this.state.age}
            />
            <input 
              type='email'
              name='email'
              placeholder='Email'
              onChange={this.changeHandler}
              value={this.state.email}
            />
            <button>Submit</button>
          </form>
      </div>
    );
  }
}

export default FriendsForm;