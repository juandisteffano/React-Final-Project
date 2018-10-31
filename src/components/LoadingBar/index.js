import React, { Component } from 'react';
//CSS
import './LoadingBar.css'
//Img
import loading from '../../assets/loading.gif'



export default class LoadingBar extends Component {

    render() {

        return (
            <img 
                src={loading} 
                alt="Loading Icon"
                className="loadingImg"
            ></img>
        ) 
    }
}