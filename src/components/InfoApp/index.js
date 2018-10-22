import React, { Component } from 'react';

//CSS
import './InfoApp.css'


class InfoApp extends Component {

    render() {
        return(
            <section className="infoApp">
                    <p>Welcome to</p>
                    <h1>Spotisearch</h1>
                    <p>Search your favorite songs over Spoify, just enter an artist's name in the following search box and enjoy!</p>
            </section>
       )
    }
}

export default InfoApp;