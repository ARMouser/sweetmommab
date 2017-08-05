import React from "react";
var Link = require("react-router").Link;
import Results from "./grandchildren/Results.js"

var Search = React.createClass({
    // set the initial state
    getInitialState: function() {
        return {search: {}, term:""};
    },
    handleSearch: function(event) {
    // sets searchValue equal to what is searched, does a fetch for the items with the name searched, sets the state equal to it.
        event.preventDefault();
        let searchValue = event.target.searchBar.value; 

        fetch(`api/products/${searchValue}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then((res) => res.json())
        .then((resJson) => {
            this.setState({search: resJson, term:searchValue});
        });
    },

    render: function () {
        //passes down the search state to the results.
        return (
            <div id="search">
                <h2> Search Products </h2>
                <form onSubmit={this.handleSearch.bind(this)}>
                    <input type="text" placeholder="What needs to be updated" id="searchBar" />
                    <input type="submit" value="Submit" id="searchBtn"/>
                </form>
                <Results search={this.state.search} term={this.state.term} />
            </div>
        );
    }
})

export default Search;