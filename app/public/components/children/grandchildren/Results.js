import React from "react";
var Link = require("react-router").Link;

var Results = React.createClass({
    getInitialState: function () {
    // sets initial state 
        return {edit: {}, found:false}
    },
    listItems: function() {
    // create a list of all items in package
        return (
            <div id="results">
                <h2> Choose which item to edit </h2>
                <div id='resultlist'>
                    <ul>
                        {Object.keys(this.props.search).map((obj, i) => {
                            return <li onClick={this.editThis} key={i}> {obj.name} </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    },
    shouldComponentUpdate: () => {
        return true;
    },
    componentWillUpdate: function() {
        //this.setState will call this repeatedly so have to use this.state
        if(!this.state.found){
            this.setState({
                found: true,
                edit: this.props.search
            });
        }
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
        this.postEdit(editedItem);
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
       if (!this.state.found) {
           return this.noItems();
       } else {
           return this.listItems();
       }
    }
});

export default Results;