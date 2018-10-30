import React, { Component } from 'react';
//Logo
import logo from '../../assets/spotifyLogo.png';
//CSS
import './LogoHeader.css'

export default class LogoHeader extends Component {

    render() {
        return (
            <a href="/home/" className={"refLogo " + this.props.className}>
                <img src={logo} 
                    alt="Logo" 
                    className="logo-header"
                />
            </a>
        )
    }
}
