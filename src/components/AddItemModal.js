import React, { Component } from 'react';

class AddItemModal extends Component {

  renderLevel = () => {
    let {arrLevel} = this.props;
    return arrLevel.map((level,index)=>{
        switch (level) {
            case 0:
                return <option key={index} value={level}>Low</option>
            case 1:
                return <option key={index} value={level}>Medium</option>
            default:
                return <option key={index} value={level}>High</option>
        }
    });
  }

  render() {
    return (
      <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Item</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="itemNameInput">Item Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Item Name"
                    id="itemNameInput"
                    onChange={(e) => this.props.handleAddItemNameChange(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="levelSelect">Select Level:</label>
                  <select
                    className="form-control"
                    id="levelSelect"
                    onChange={(e) => this.props.handleAddItemLevelChange(e.target.value)}
                  >
                    {this.renderLevel()}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={() => this.props.handleCancelAddItem()}
                >
                  Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => this.props.handleSaveAddItem()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddItemModal;
