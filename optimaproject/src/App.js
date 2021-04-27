import React from 'react';
import {Route, Switch,Redirect,withRouter} from 'react-router-dom';
import './App.css';

import Data from "./data/data.json"

import NavBar from "./components/Menu/NavBar"
import AboutUs from "./components/AboutUs/AboutUs"
import Company from "./components/CompanyStructure/CompanyStructure"
import Career from "./components/Career/Career"
import Products from "./components/Products/Products"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div>
        <NavBar data={Data}/>

            <Switch>
                <Route exact path="/">
                    <Redirect from="/" to="/products" />
                </Route>
                <Route path="/aboutus" exact component={AboutUs}/>
                <Route path="/company" exact component={Company}/>
                <Route path="/careeer" exact component={Career}/>
                <Route path="/products" exact component={() => (<Products data={Data} />)}/>
                <Route path="/services" exact component={Services}/>
                <Route path="/contact" exact component={Contact}/>
            </Switch>
    </div>
  );
}

export default withRouter(App);
