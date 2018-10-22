import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView';
import HomeView from './homeView';
import AboutView from './aboutView';

//Components
import Header from '../components/Header'
import Footer from '../components/Footer'

const getRoutes = function() {
    return (
        <div>
            <Header></Header>

            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/about" component={AboutView} />
            </Switch>

            <Footer></Footer>
        </div>
    )
};

export default getRoutes;
