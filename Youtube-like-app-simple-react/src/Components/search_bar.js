import React, {Component} from 'react';


class SearchBar extends Component {
  render(){
    return <input onChange={(event) => console.log(event)}/>
  }

  onInputChange =(event) => {
    console.log(event.target)
  }
}

export default SearchBar;
