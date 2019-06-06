import React, { Component } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4';
import { orderBy as orderByld } from 'lodash';
import { filter as filterld } from 'lodash';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';
import Items from './mockdata/Items';
import SweetAlert from 'sweetalert-react';
import './../node_modules/sweetalert/dist/sweetalert.css';

class App extends Component {

  constructor(props) {
    super(props);
    let arrLevel = [];

    if (Items.length > 0) {
      for (let i = 0; i < Items.length; i++) {
        if (arrLevel.indexOf(Items[i].level) === -1) {
          arrLevel.push(Items[i].level);
        }
      }
      arrLevel.sort(
        function (a, b) {
          return a - b;
        });
    }
    this.state = {
      items: Items,
      showDeleteAlert: false,
      deleteTitle: '',
      deletedItemId: '',
      editedItemIndex: 0,
      editedItemId: '',
      editedItemName: '',
      editedItemLevel: 0,
      arrLevel: arrLevel,
      addItemName: '',
      addItemLevel: 0,
      sortType: '',
      sortOrder: '',
      keywordSearch: ''
    };

    this.handleShowDeleteAlert = this.handleShowDeleteAlert.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleCancelEditItem = this.handleCancelEditItem.bind(this);
    this.handleEditItemNameChange = this.handleEditItemNameChange.bind(this);
    this.handleEditItemLevelChange = this.handleEditItemLevelChange.bind(this);
    this.handleSaveEditItem = this.handleSaveEditItem.bind(this);
    this.handleAddItemNameChange = this.handleAddItemNameChange.bind(this);
    this.handleAddItemLevelChange = this.handleAddItemLevelChange.bind(this);
    this.handleCancelAddItem = this.handleCancelAddItem.bind(this);
    this.handleSaveAddItem = this.handleSaveAddItem.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(keyword) {
    let searchResult = [];

    if (keyword.length === 0) {
      searchResult = Items;
    }

    if (keyword.length > 0) {
      keyword = keyword.toLowerCase();
      searchResult = filterld(Items, (item) => {
        return item.name.toLowerCase().indexOf(keyword) > -1;
      });
    }

    this.setState({
      items: searchResult,
      keywordSearch: keyword
    });
  }

  handleSort(sortType, sortOrder) {
    this.setState({
      sortType: sortType,
      sortOrder: sortOrder
    });
    let { items } = this.state;
    this.setState({
      items: orderByld(items, [sortType], [sortOrder])
    });
  }

  handleSaveAddItem() {
    let { addItemName, addItemLevel } = this.state;

    if (addItemName.trim() === '') return false

    let newItem = {
      id: uuidv4(),
      name: addItemName,
      level: parseInt(addItemLevel)
    }

    Items.push(newItem);
    this.setState({
      items: Items,
      addItemName: '',
      addItemLevel: 0
    });

  }

  handleCancelAddItem() {
    this.setState({
      addItemName: '',
      addItemLevel: 0
    });
  }

  handleAddItemNameChange(value) {
    this.setState({
      addItemName: value
    });
  }

  handleAddItemLevelChange(value) {
    this.setState({
      addItemLevel: value
    });
  }

  handleShowDeleteAlert(item) {
    this.setState({
      showDeleteAlert: true,
      deleteTitle: item.name,
      deletedItemId: item.id
    });
  }

  handleSaveEditItem() {
    let { items, editedItemId, editedItemName, editedItemLevel } = this.state;

    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === editedItemId) {
          items[i].name = editedItemName;
          items[i].level = parseInt(editedItemLevel);
          break;
        }
      }

      this.setState({
        editedItemId: ''
      });
    }
  }

  handleEditItemNameChange(value) {
    this.setState({
      editedItemName: value
    });
  }

  handleEditItemLevelChange(value) {
    this.setState({
      editedItemLevel: value
    });
  }

  handleCancelEditItem() {
    this.setState({
      editedItemId: ''
    });
  }

  handleDeleteItem() {
    let items = this.state.items;
    let deletedItemId = this.state.deletedItemId;

    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === deletedItemId) {
          items.splice(i, 1);
          this.setState({
            deleteTitle: '',
            deletedItemId: ''
          });
          break;
        }
      }
    }

    this.setState({
      showDeleteAlert: false
    });
  }
  handleEditItem(item, index) {
    this.setState({
      editedItemIndex: index,
      editedItemId: item.id,
      editedItemName: item.name,
      editedItemLevel: item.level
    });
  }

  render() {
    return (
      <div className="container">
        <SweetAlert
          show={this.state.showDeleteAlert}
          title="Delete Item"
          text={this.state.deleteTitle}
          showCancelButton
          onOutsideClick={() => this.setState({ showDeleteAlert: false })}
          onEscapeKey={() => this.setState({ showDeleteAlert: false })}
          onCancel={() => this.setState({ showDeleteAlert: false })}
          onConfirm={() => this.handleDeleteItem()}
        />
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search
              keywordSearch={this.state.keywordSearch}
              onHandleSearch={this.handleSearch}
            />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort
              sortType={this.state.sortType}
              sortOrder={this.state.sortOrder}
              onHandleSort={this.handleSort}
            />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <AddItem
              arrLevel={this.state.arrLevel}
              addItemName={this.state.addItemName}
              addItemLevel={this.state.addItemLevel}
              onHandleAddItemNameChange={this.handleAddItemNameChange}
              onHandleAddItemLevelChange={this.handleAddItemLevelChange}
              onHandleCancelAddItem={this.handleCancelAddItem}
              onHandleSaveAddItem={this.handleSaveAddItem}
            />
          </div>
        </div>
        <ListItem
          items={this.state.items}
          editedItemId={this.state.editedItemId}
          editedItemIndex={this.state.editedItemIndex}
          editedItemLevel={this.state.editedItemLevel}
          editedItemName={this.state.editedItemName}
          arrLevel={this.state.arrLevel}
          onShowDeleteAlert={this.handleShowDeleteAlert}
          onHandleEditItem={this.handleEditItem}
          onHandleCancelEditItem={this.handleCancelEditItem}
          onHandleEditItemNameChange={this.handleEditItemNameChange}
          onHandleEditItemLevelChange={this.handleEditItemLevelChange}
          onHandleSaveEditItem={this.handleSaveEditItem}
        />
      </div>
    );
  }
}

export default App;
