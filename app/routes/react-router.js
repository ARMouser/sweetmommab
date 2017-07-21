var React = require("react");
var router = require("react-router");

import Main from "../public/components/Main.js";
import Add from "../public/components/children/Add.js";
import Order from "../public/components/children/Order.js";
import Rec from "../public/components/children/Recommendation.js";
import Search from "../public/components/children/Search.js"
import Results from "../public/components/children/grandchildren/Results.js";

var Route = router.Route;
var Router = router.Router;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

module.exports = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path="order" component={Order} />
            <Route path="rec" component={Rec} />
            <Route path="add" component={Add} />
            <Route path="search" component={Search}>
                <Route path="results" component={Results} />
                <IndexRoute component={Results} />
            </Route>
            <IndexRoute component={Order} />
        </Route>
    </Router>
);