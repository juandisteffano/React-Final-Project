import React, { Component } from 'react';

//Logo
import logo from '../../assets/spotifyLogo.png';

//CSS
import './Header.css'

//Components
import SearchField from '../SearchField'

//Redux
import { connect } from 'react-redux';

export class Header extends Component {

    render() {
            return (
                <header className="header">
                    {
                        this.props.showSearchInHeader ?
                            <a href="/">
                                <img src={logo} 
                                    alt="Logo" 
                                    className="logo-header vertical-center"
                                    href="/"
                                />
                            </a>
                            :
                            <a href="/">
                                <img src={logo} 
                                    alt="Logo" 
                                    className="logo-header horizontal-center vertical-center"
                                ></img>
                            </a>
                    }
                    {
                        this.props.showSearchInHeader &&
                        <SearchField 
                            placeholder="Search for another artist"
                            className="vertical-center"
                        />
                    }
                </header>
            )
    }
}


const mapStateToProps = state => {
    return {
        showSearchInHeader: state.showSearchInHeader
    };
}


export default connect(mapStateToProps,null)(Header);