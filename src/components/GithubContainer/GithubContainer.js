import React, { Component } from 'react';
import getUser from '../../api/api';
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import defaultData from '../../defaultData';

class GithubContainer extends Component {
  state = {
    inputValue: '',
    userProfile: defaultData,
  }

  shouldComponentUpdate = () => {
    if (this.state.inputValue !== "") {
      console.log('scu', this.state.inputValue);
      this.formatData(this.state.inputValue)
    }
    return true;
  }

  formatData = (user) => {
    getUser(user).then((data => {
      console.log('data', data);
        const newData = {};
      if (data.statusText === 'OK') {
        newData.login = data.data['login'];
        newData.avatar_url = data.data['avatar_url'];
        newData.name = data.data['name'];
        newData.email = data.data['email'];
      }
      else {
        newData.login = 'Null'
        newData.name = 'User does not exist';
        newData.avatar_url = '';
        newData.email = '';
      }
      console.log('new data', newData);
      this.getUserDetails(newData)
    }))
  }

  getUserDetails = (user) => {
    const userProfile = user;
    // const userProfile = this.formatData(user);
    console.log('userProfile from fx', userProfile);
    this.setState({userProfile});
  }

  handleClick = (event) => {
    event.persist(); // const inputValue = event.target.value instead in order to store value before event is recycled by react
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.setState({
      inputValue: event.target.value
    }), 1000);
  }

  render() {
    // console.log('profile', this.formatData('tbaraza'));
    console.log('state', this.state.userProfile);
    console.log('state inputValue', this.state.inputValue);
    return (
      <div>
        <Search handleClick={this.handleClick} />
        <Profile userProfile={this.state.userProfile} />
      </div>
    )
  }
}

export default GithubContainer;
