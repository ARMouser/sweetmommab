import React from "react";
var Link = require("react-router").Link;

var Order = React.createClass({
    getInitialState: function () {
        return {orders: ""};
    },
    componentDidMount: function () {
        this.pullOrders()
    },
    pullOrders: () => {
        //pull all the orders from the database
        fetch('/api/new_orders').then((res) => {
            this.setState({orders: res.data});
        });
        // potentially have to set original state by saying state = {object}
    },
    newOrders : function() {
        // function for parsing data from the orders
        return (
            <div id="order">
                <h2>
                    New Orders
                </h2>
                <div id="orderList">
                    <ul>
                        <li>Due: __include due date <br />
                            <span id="product"> __include quantity __include product name </span> <br />
                            Ordered by: __include email address of user
                            <button id="completed"> Completed! </button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    noOrders : function() {
        // if no orders
        return (
            <div id="order">
                <h2>
                    New Orders
                </h2>
            
                 <div id="orderList">
                    <h3> No New Orders! </h3>
                </div>
            </div>
        );
    },
    render: function () {
        if (!this.state.orders) {
            return this.noOrders();
        } else {
            return this.newOrders();
        }
    }
});

export default Order;