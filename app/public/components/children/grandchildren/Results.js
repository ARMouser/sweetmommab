import React from "react";
var Link = require("react-router").Link;

var Results = React.createClass({
    getInitialState: function () {
    // takes the props from the parent branch, search
        return {edit: this.props.foundItems}
    },
    listItems: function () {
    // create a list of all items in package
        return (
            <div id="results">
                <h2> Choose which item to edit </h2>
                <div id='resultlist'>
                    <ul>
                        <li onClick={this.editThis}> __name of item __include an id in list tag</li>
                    </ul>
                </div>
            </div>
        )
    },
    editThis: function () {
        //edit values of the item that's selected
        return (
            <div id='results'>
                <h2> __this name</h2>
                <form onSubmit={this.gatherEdit}>
                    <input type="text" placeholder="Name" value="insert__name" id="editName" />
                    <input type="text" placeholder="Price" value="insert__price" id="editPrice" />
                    <input type="text" placeholder="Quantity" value="insert__quantity" id="editQuantity" />
                    <input type="text" placeholder="Customize" value="insert__customize" id="editCustomize" />
                    <input type="text" placeholder="Photo Name" value="insert__photo" id="editImg" />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    },
    gatherEdit: function (event) {
    // gather data after the new item is submitted
    event.preventDefault();
        let editedItem ={
            productName: event.target.editName.value,
            price: event.target.editPrice.value,
            quantity: event.target.editQuantity.value,
            customize: event.target.editCustomize.value,
            img: event.target.editImg.value
        }
        this.setState(editedItem);
        this.postEdit(state.editedItem)
    },
    postEdit: function (edit) {
    fetch('/api/new_products', {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json'
       },
       body: JSON.stringify(edit)
        });
    },
    noItems: function () {
    //error handling if no search is done
    return (
        <div id="results">
            <h2> Nothing Searched! </h2>
        </div>
    )
    },
    render: function () {
       if (this.state.edit === "") {
           return this.listItems();
       } else {
           return this.noItems();
       }
    }
});

export default Results;