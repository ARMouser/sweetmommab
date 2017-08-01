import React from "react";
var Link = require("react-router").Link;
import Results from "./grandchildren/Results.js"

var Search = React.createClass({
    // set the initial state
    getInitialState: function() {
        return {search: "", item: {}};
    },
    handleSearch: function(event) {
    // this function sets the new state for the search term
        event.preventDefault();
        let searchValue = event.target.searchBar.value; 

        fetch(`api/products/${searchValue}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then((res) => {
            res.json().then((resJson) => {
                this.setState({search: searchValue, item: resJson});
            })
        })
    },
    render: function () {
        return (
            <div id="search">
                <h2> Search Products </h2>
                <form onSubmit={this.handleSearch.bind(this)}>
                    <input type="text" placeholder="What needs to be updated" id="searchBar" />
                    <input type="submit" value="Submit" id="searchBtn"/>
                </form>
                <div>{this.state.search}</div>
                <Results search={this.state.search} />
            </div>
        );
    }
})

export default Search;