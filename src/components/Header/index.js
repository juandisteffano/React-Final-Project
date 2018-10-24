import React, { Component } from 'react';

//Logo
import logo from '../../assets/logo.svg';

//CSS
import './Header.css'

//Components
import SearchField from '../SearchField'

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            showSearchField: true,
        }
    }
    render() {
        if(this.state.showSearchField){
            return (
                <header className="header">
                    <img src={logo} 
                        alt="Logo" 
                        className="logo-header vertical-center"
                    />
                    {
                        this.state.showSearchField &&
                        <SearchField 
                            placeholder="Search for another artist"
                            className="vertical-center"
                        />
                    }
                </header>
            )
        }else{
            return (
                <header className="header">
                    <img src={logo} 
                        alt="Logo" 
                        className="logo-header horizontal-center vertical-center"
                    ></img>
                </header>
            );
        }
    }
}

export default Header;