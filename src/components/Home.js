import React, {Component} from 'react';
import Navbar from "./navbar";
import laur from "../assets/lauraxpafjkl_84447099_503539660306090_8920434893995649625_n.jpg";

class Home extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={laur} className="App-logo" alt="logo" />
                    <p style={{marginTop: '10%'}}>
                        Big <code style={{color: 'red'}}><em><b>Laura</b></em></code> is watching you
                    </p>

                </header>
            </div>
        );
    }
}

export default Home;
