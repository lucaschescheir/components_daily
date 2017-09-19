import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return(
            <div className="nav_bar">
                <nav>
                    <img src="" alt="Logo" />
                    <ul className="bar">
                        <li className="item" ><a className="hyper" id="active" href="">Home </a></li>
                        <li className="item"><a className="hyper" href="">Products </a></li>
                        <li className="item"><a className="hyper" href="">Services</a></li>
                        <li className="item"><a className="hyper" href="">About</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar;
