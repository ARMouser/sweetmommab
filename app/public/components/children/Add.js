import React from "react";
var Link = require("react-router").Link;

var Add = React.createClass({
    addOrder : function(newOrder) {
       //Method to post data
       fetch('/api/new_products', {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'
       },
       body: JSON.stringify(newOrder)
        });
    },
    handleSubmit : function(event) {
        //handleSubmit takes the data upon adding a new product and sets it to the state, and then uses addOrder to post
        event.preventDefault();
        let newState ={
            productName: event.target.productName.value,
            price: event.target.productPrice.value,
            quantity: event.target.productQuantity.value,
            customize: event.target.productCustomize.value,
            img: event.target.productImg.value
        }
        this.setState(newState)
        this.addOrder(newState);
    },
    render : function () {
        return (
            <div id="add"> 
                <h2>
                    Add New Content
                </h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Name" id="productName" />
                        <input type="text" placeholder="Price" id="productPrice" />
                        <input type="text" placeholder="Quantity" id="productQuantity" />
                        <input type="text" placeholder="Customize" id="productCustomize" />
                        <input type="text" placeholder="Photo Name" id="productImg" />
                        <input type="submit" value="Submit"/>
                    </form>
            </div>
        );
    }
})

export default Add;