import React from 'react';
import {NavLink} from "react-router-dom";
import './css/NavBar.css';

function NavBar(props) {

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {props.data.menu.map((item,key)=>{

                            return(
                                <li className="nav-item" key={key}>
                                    <NavLink to={item.url} className="nav-link">{item.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
