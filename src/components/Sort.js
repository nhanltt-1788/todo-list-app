import React, { Component } from 'react';

class Sort extends Component {
  renderSort = () => {
    let {sortType, sortOrder} = this.props;

    if(sortType !== '' && sortOrder !== '') {
      return (
        <span className="sort__option">{sortType} - {sortOrder}</span>
      );
    }
  }

  render() {
    return (
      <div className="sort">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sort by <span className="caret" />
          </button>
          <ul className="dropdown-menu">
            <li
              onClick={() => this.props.onHandleSort('name', 'asc')}
            >
              <a href="#" role="button">Name ASC </a>
            </li>
            <li
              onClick={() => this.props.onHandleSort('name', 'desc')}
            >
              <a href="#" role="button">
                Name DESC
              </a>
            </li>
            <li role="separator" className="divider" />
            <li
              onClick={() => this.props.onHandleSort('level', 'asc')}
            >
              <a href="#" role="button">
                Level ASC
              </a>
            </li>
            <li
              onClick={() => this.props.onHandleSort('level', 'desc')}
            >
              <a href="#" role="button">
                Level DESC
              </a>
            </li>
          </ul>
        </div>
        {this.renderSort()}
      </div>
    )
  }
}

export default Sort;
