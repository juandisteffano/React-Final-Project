import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import getRoutes from './routes/';

ReactDOM.render(
    <BrowserRouter>
        {getRoutes()}
    </BrowserRouter>,
    document.getElementById('root')
);


//https://api.spotify.com/v1/search?q=oasis&type=artist