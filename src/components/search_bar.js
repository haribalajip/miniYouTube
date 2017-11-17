import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:""}

  }
  onInputChange(event){
    console.log(event.target);

  }
  render() {
    return (


      <div className = "col-md-8 search-bar">
        <div className="page-header">
          <h1>MinimalYouTube</h1>
        </div>
        <input className="form-control" placeholder = "Search term here" onChange= {(event)=>{this.onInputChange(event.target.value)}}></input>

      </div>
    );
  }
  onInputChange(term){
    this.setState({term:term});
    this.props.onInputChange({term});

  }
}

export default SearchBar;
