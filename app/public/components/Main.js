import React from "react";
var Link = require('react-router').Link;
import Add from "./children/Add.js";
import Order from "./children/Order.js";
import Rec from "./children/Recommendation.js";
import Search from "./children/Search.js";

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <div id="header">
                    <h1>
                        Admin
                    </h1>
                    <hr />
                </div>

                <Add />
                <Search />
                <Rec />
                <Order />
            </div>
        );
    }
});

export default Main;