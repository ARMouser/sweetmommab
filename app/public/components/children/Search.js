import React from "react";
var Link = require("react-router").Link;
import Results from "./grandchildren/Results.js"

var Search = React.createClass({
    // set the initial state
    getInitialState : function() {
        return {search: ""};
    },
    handleSearch: function(event) {
    // this function sets the new state for the search term
        event.preventDefault();
        let newState = {
            search: event.target.search.value
        }
        this.setState(newState);
    },
    findItem: function(item) {
    // does the get for the stuff and creates a state to pass to props
        fetch('/api/products/name', item).then(function(res) {
            this.setState({foundItems: res.data})
        })
    },
    render: function () {
        return (
            <div id="search">
                <h2> Search Products </h2>
                <form onSubmit={this.handleSearch}>
                    <input type="text" placeholder="What needs to be updated" id="searchBar" />
                    <input type="submit" value="Submit" />
                </form>
                <Results search={this.state.foundItems} />
            </div>
        );
    }
})

export default Search;