import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./Home";
import Predict from "./Predict";

class Myrouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/predict" component={Predict}/>


                </div>
            </Router>
        );
    }
}

export default Myrouter;
