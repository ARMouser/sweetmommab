import React from "react";
var Link = require("react-router").Link;

var Order = React.createClass({
    render: function () {
        return (
            <div id="order">
                <h2>
                    New Orders
                </h2>
                <div id="orderList">
                </div>
            </div>
        );
    }
});

export default Order;