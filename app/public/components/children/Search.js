import React from "react";
var Link = require("react-router").Link;
import Results from "./grandchildren/Results.js"

var Search = React.createClass({
    // add a lifecycle event to do a get on the database
    // pass the props down to results
    render: function () {
        return (
            <div id="search">
                <h2> Search Products </h2>
                <input type="text" placeholder="What needs to be updated" id="search" />
                <button id="searchSubmit"> Submit </button>

                <Results />
            </div>
        );
    }
})

export default Search;