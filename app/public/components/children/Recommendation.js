import React from "react";
var Link = require("react-router").Link;

var Rec = React.createClass({
    render: function() {
        return (
            <div id="rec">
                <h2>
                    New Recommendations to Approve
                </h2>
                <div id="recApprove">
                </div>
            </div>
        );
    }
})

export default Rec;