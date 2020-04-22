import React, { Component } from "react";

export default class Table extends Component {
  state = {
    searchText: "",
  };

  render() {
    let { searchText } = this.state;
    let renderListItems = [];
    renderListItems =
      this.props.dataList &&
      this.props.dataList.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.ratings}</td>
          <td>{item.duration}</td>
        </tr>
      ));

    return (
      <div>
        <input
          type="text"
          id="search-input"
          onChange={(e) => {
            this.setState({ searchText: e.target.value });
          }}
        />
        <button
          onClick={() => {
            if (searchText.length > 1) {
              this.props.onSearch(searchText);
            } else {
              alert("Enter At least 2 characters");
            }
          }}
        >
          searchText
        </button>
        <table id="directory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Durations</th>
            </tr>
          </thead>
          <tbody>
            {renderListItems.length > 0 ? (
              renderListItems
            ) : (
              <tr id="no-result">
                <td colSpan="3">No Result Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
