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

  componentDidMount = () => {
  }

  // componentDidUpdate = () => {
  //   this.getUserDetails(this.state.inputValue);
  // }

  getUserDetails = (user) => {
    getUser(user).then(data => this.setState({ userProfile: data}));
  }

  handleClick = (event) => {
    event.persist();
    setTimeout(() => this.setState({
      inputValue: event.target.value
    }), 2000);
  }

  render() {
    return (
      <div>
        <Search handleClick={this.handleClick} />
        <Profile userProfile={this.state.userProfile} />
      </div>
    )
  }
}

export default GithubContainer;