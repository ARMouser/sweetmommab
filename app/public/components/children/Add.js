import React from "react";
var Link = require("react-router").Link;

var Add = React.createClass({
    render : function () {
        return (
            <div id="add"> 
                <h2>
                    Add New Content
                </h2>
                    <form>
                        <input type="text" placeholder="Name" id="productName" />
                        <input type="text" placeholder="Price" id="productPrice" />
                        <input type="text" placeholder="Quantity" id="productQuantity" />
                        <input type="text" placeholder="Customize" id="productCustomize" />
                        <input type="text" placeholder="Photo Name" id="productImg" />
                        <button id="submit"> Submit </button>
                    </form>
            </div>
        );
    }
})

export default Add;