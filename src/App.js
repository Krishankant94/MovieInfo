import React, { Component } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import "./App.css";

class App extends Component {
  state = {
    moviesList: [],
    searchQuery: "",
  };

  handleFormData = (data) => {
    let arr = this.state.moviesList;
    let itemIndex = this.state.moviesList.findIndex(
      (item) => item.name === data.name
    );
    if (itemIndex > -1) {
      arr.splice(itemIndex, 1, data);
      this.setState({ moviesList: arr });
    } else if (this.state.searchQuery.length > 0) {
      arr = [...arr, data].filter((item) =>
        item.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
      );
      this.setState({ moviesList: arr });
    } else {
      arr = [...this.state.moviesList, data];
      this.setState({ moviesList: arr });
    }
  };

  handleSearch = (text) => {
    let list = this.state.moviesList;
    let searchedList = list.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ moviesList: searchedList, searchQuery: text });
  };

  render() {
    let { moviesList } = this.state;
    let sortedList = moviesList.sort((a, b) => b.ratings - a.ratings);
    return (
      <div className="main-app-container">
        <Form onFormSubmit={this.handleFormData} />
        <Table dataList={sortedList} onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
