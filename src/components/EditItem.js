import React, { Component } from 'react';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.renderLevel = this.renderLevel.bind(this);
  }

  renderLevel() {
    let { arrLevel} = this.props;

    return arrLevel.map((level, index) => {
      switch (level) {
        case 0:
          return <option key={index} value={level}>Low</option>
        case 1:
          return <option key={index} value={level}>Medium</option>
        default:
          return <option key={index} value={level}>Hight</option>
      }
    });
  }

  render() {
    let { editedItemIndex, editedItemName, editedItemLevel} = this.props;

    return (
      <tr>
        <td className="news__id">{editedItemIndex}</td>
        <td>
          <input
          type="text"
          className="form-control"
          value={editedItemName}
          onChange={(e) => this.props.handleEditItemNameChange(e.target.value)}
          />
        </td>
        <td className="news__level">
          <select 
            className="form-control"
            value={editedItemLevel}
            onChange={(e) => this.props.handleEditItemLevelChange(e.target.value)}
            >
            {this.renderLevel()}
          </select>
        </td>
        <td className="news__action">
          <button type="button" className="btn btn-default btn-sm" onClick={() => this.props.handleCancelEditItem()}>Cancel</button>
          <button type="button" className="btn btn-success btn-sm" onClick={() => this.props.handleSaveEditItem()}>Save</button>
        </td>
      </tr>
    )
  }
}

export default EditItem;
