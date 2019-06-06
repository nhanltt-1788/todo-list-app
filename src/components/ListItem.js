import React, { Component } from 'react';
import Item from './Item';
import EditItem from './EditItem';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem() {
    let items = this.props.items;

    if (items.length === 0) {
      return <Item item={0} />
    }
    else {
      let {editedItemIndex, editedItemId, editedItemName, editedItemLevel, arrLevel} = this.props;
      return items.map((item, index) => {
        if(item.id === editedItemId) {
          return(
            <EditItem 
              key={index}
              editedItemIndex={editedItemIndex}
              editedItemName={editedItemName}
              editedItemLevel={editedItemLevel}
              arrLevel={arrLevel}
              handleCancelEditItem={this.props.onHandleCancelEditItem}
              handleEditItemNameChange={this.props.onHandleEditItemNameChange}
              handleEditItemLevelChange={this.props.onHandleEditItemLevelChange}
              handleSaveEditItem={this.props.onHandleSaveEditItem}
            />
          );
        }
        else {
          return (
            <Item
              item={item}
              index={index}
              key={item.id}
              handleShowDeleteAlert={this.props.onShowDeleteAlert}
              handleEditItem={this.props.onHandleEditItem}
            />
          );
        }
      });
    }
  }

  render() {
    // let items = this.props.items;
    // const rows = [];

    // if (items.length === 0) {
    //   return <Item item={0} />
    // }
    // else {
    //   let { editedItemIndex, editedItemId, editedItemName, editedItemLevel } = this.props;
    //   console.log(editedItemIndex);
    //   items.map((item, index) => {
    //     if (item.id === editedItemId) {
    //       rows.push(
    //         <EditItem
    //           key={item.id}
    //           item={item}
    //           index={index}
    //         />
    //       );
    //     }
    //     else {
    //       rows.push(
    //         <Item
    //           item={item}
    //           index={index}
    //           key={item.id}
    //           handleShowDeleteAlert={this.props.onShowDeleteAlert}
    //           handleEditItem={this.props.onHandleEditItem}
    //         />
    //       );
    //     }}
    //   });
    return (
      <div className="row">
        <h3> List Item </h3>
        <table className="table table-hover news">
          <thead>
            <tr>
              <th className="news__id">#</th>
              <th>Name</th>
              <th className="news__level">Level</th>
              <th className="news__action">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItem()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ListItem;
