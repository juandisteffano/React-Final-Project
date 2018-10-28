import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Views
import HomeView from './homeView';
import ArtistSearchView from './artistSearchView';
import ArtistView from './artistView';
import AlbumView from './albumView';

//Components
import Header from '../components/Header'
import Footer from '../components/Footer'

const getRoutes = function() {
    return (
        <div>
            <Header></Header>

            
            <Switch>
                <Route exact path="/" component={() => window.location = 'http://localhost:8888'} />
                <Route exact path="/home/:id" component={HomeView} />
                <Route path="/home/" component={HomeView} />
                <Route path="/search/:searchkey" component={ArtistSearchView} />
                <Route path="/artist/:idartist" component={ArtistView} />
                <Route path="/album/:idalbum" component={AlbumView} />
            </Switch>

            <Footer></Footer>
        </div>
    )
};

export default getRoutes;
