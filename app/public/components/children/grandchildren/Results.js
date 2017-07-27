import React from "react";
var Link = require("react-router").Link;

var Results = React.createClass({
    // take the response package from papa, parse the data into text boxes
    // take the user data and do a post to update the data
    render: function () {
        return (
            <div id="results">
                <h2> Results </h2>
            </div>
        );
    }
})

export default Results;