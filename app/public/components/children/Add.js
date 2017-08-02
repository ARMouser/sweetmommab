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
    clearField: function() {
        name.value = " "
    },
    handleSubmit : function(event) {
        //handleSubmit takes the data upon adding a new product and sets it to the state, and then uses addOrder to post
        event.preventDefault();
        let newState ={
            name: event.target.productName.value,
            price: event.target.productPrice.value,
            description: event.target.productQuantity.value,
            customize: event.target.productCustomize.value,
            photo: event.target.productImg.value
        }
        this.setState(newState);
        this.addOrder(newState);
    },
    render : function () {
        return (
            <div id="add"> 
                <h2>
                    Add New Content
                </h2>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Product Name</h3>
                        <h4>This should be a specific Name</h4>
                        <input type="text" placeholder="Name" id="productName" /><br />
                        <h3>Price</h3>
                        <h4>Do not include the $</h4>
                        <input type="text" placeholder="Price" id="productPrice" /><br />
                        <h3>Quantity the item is sold in</h3>
                        <h4>Ex. "Sold by the Dozen" or "One 9x11 Cake"</h4>
                        <input type="text" placeholder="Quantity" id="productQuantity" /><br />
                        <h3>Customizeable options</h3>
                        <h4>Ex. "Gluten Free Available" or Topping Changes</h4>
                        <input type="text" placeholder="Customize" id="productCustomize" /><br />
                        <h3>Image</h3>
                        <h4>Please give the specific image name. Ex "mandmcookie.jpg"</h4>
                        <input type="text" placeholder="Photo Name" id="productImg" /><br /><br />
                        <input type="submit" value="Submit" id="btnAdd"/>
                    </form>
            </div>
        );
    }
})

export default Add;