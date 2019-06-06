import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search item name"
          value={this.props.keywordSearch}
          onChange={(e) => this.props.onHandleSearch(e.target.value)}
          />
        <span className="input-group-btn">
          <button
            className="btn btn-info"
            type="button"
            onClick={() => this.props.onHandleSearch('')}  
          >
            Clear
          </button>
        </span>
      </div>
    )
  }
}

export default Search;
