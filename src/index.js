import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import getRoutes from './routes/';

//Redux
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {getRoutes()}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


//https://api.spotify.com/v1/search?q=oasis&type=artist