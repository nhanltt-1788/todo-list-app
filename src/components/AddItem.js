import React, { Component } from 'react';
import AddItemModal from './AddItemModal';

class AddItem extends Component {
  render() {
    return (
      <div className="add-item">
        <button
          type="button"
          className="btn btn-info add-button"
          data-toggle="modal" data-target="#addItemModal"
        >
          Add Item
        </button>
        <AddItemModal 
          arrLevel={this.props.arrLevel}
          handleAddItemNameChange={this.props.onHandleAddItemNameChange}
          handleAddItemLevelChange={this.props.onHandleAddItemLevelChange}
          handleCancelAddItem={this.props.onHandleCancelAddItem}
          handleSaveAddItem={this.props.onHandleSaveAddItem}
        />
      </div>
    )
  }
}

export default AddItem;
