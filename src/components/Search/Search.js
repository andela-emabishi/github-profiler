import React, { Component } from 'react';
import './search.css'

// Input field. Will pass up entry to parent so that the parent can make the API call
class Search extends Component {
  render() {
    return (
      <div className="ui massive input">
        <input type="text" placeholder="Search..." onChange={this.props.handleClick}/>
      </div>
    );
  }
}

export default Search;