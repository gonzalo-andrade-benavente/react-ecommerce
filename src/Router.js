import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import MiComponent from './components/MiComponent';
import Error from './components/Error';

class Router extends Component {

    render() {
        return (

            <BrowserRouter>

                <Header />

                <Slider />

                {/* Routes and pages.*/}

                <div className="center">

                    <Switch>

                        <Route exact path="/" component="" />

                        <Route exact path="/ruta-de-prueba" component={MiComponent} />

                        <Route component={Error} />

                    </Switch>

                    <Sidebar />

                    <div className="clearfix"></div>


                </div>

                <Footer />

            </BrowserRouter>
        )
    }
}

export default Router;