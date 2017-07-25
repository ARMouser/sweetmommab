import React from "react";
var Link = require("react-router").Link;

var Rec = React.createClass({
    getInitialState: function () {
        return {recs: ""};
    },
    componentDidMount: function () {
        this.pullRecs()
    },
    pullRecs: function () {
        //pull all the new recommendations from the database
        fetch('/api/recommendations_approval').then(function(res) {
            this.setState({recs: res.data})
        })
    },
    newRecs : function() {
        // function for parsing data from the orders
        return (
            <div id="recs">
                <h2>
                    New Recommendations to Approve
                </h2>
                <div id="recList">
                    <ul>
                        <li><strong> __include username </strong><br />
                            <span id="recText"> __include rec text </span> <br />
                            <button id="agree"> Add it! </button> <button id="disagree"> Reject it! </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    noRecs : function() {
        // if no recs
        return (
            <div id="recs">
                <h2>
                    New Recs
                </h2>
            
                 <div id="recList">
                    <h3> No Recs to Approve! </h3>
                </div>
            </div>
        );
    },
    render: function () {
        if (!this.state.recs) {
            return this.noRecs();
        } else {
            return this.newRecs();
        }
    }
})

export default Rec;