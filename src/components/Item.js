import React, { Component } from 'react';

class Item extends Component {
  render() {
    let item = this.props.item;
    let index = this.props.index + 1;

    if (item === 0) {
      return (
        <tr>
          <td colSpan="4" className="text-center">
            <h4>No Item</h4>
          </td>
        </tr>
      )
    }
    else {
      let labelClass = '';
      let labelContent = '';

      switch (item.level) {
        case 0:
          labelClass = 'label label-warning';
          labelContent = 'Low';
          break;
        case 1:
          labelClass = 'label label-danger';
          labelContent = 'Medium';
          break;
        case 2:
          labelClass = 'label label-info';
          labelContent = 'High';
          break;
      }

      return (
        <tr>
          <td className="news__id">{index}</td>
          <td>{item.name}</td>
          <td className="news__level"><span className={labelClass}>{labelContent}</span></td>
          <td className="news__action">
            <button type="button" className="btn btn-warning btn-sm" onClick={() => this.props.handleEditItem(item, index)}>Edit</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.handleShowDeleteAlert(item)}>Delete</button>
          </td>
        </tr>
      )
    }
  }
}

export default Item;
