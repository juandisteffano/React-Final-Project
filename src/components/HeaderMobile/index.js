import React, { Component } from 'react';
//Logo
import magnifyingGlass from '../../assets/magnifyingGlass.png';
//CSS
import './HeaderMobile.css'
//Components
import SearchField from '../SearchField'
import LogoHeader from '../LogoHeader'
//Redux
import { connect } from 'react-redux';

export class HeaderMobile extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSearchBar: false,
        }
    }

    render() {
        return (
            <header className="headerMobile">
                <LogoHeader
                    className="ref center"
                />
                {
                    !this.state.showSearchBar && this.props.showSearchInHeader &&
                    <div className="iconSearchMobile">
                    <img 
                        src={magnifyingGlass} 
                        alt="Search button" 
                        onClick={() => {this.setState({showSearchBar: true})}}
                        className="iconSearchMobile"
                    />
                    <arrow className="down"/>
                    </div>
                }
                {
                    this.state.showSearchBar && this.props.showSearchInHeader &&
                    <div className="iconSearchMobile">
                    <img 
                        src={magnifyingGlass} 
                        alt="Search button" 
                        onClick={() => {this.setState({showSearchBar: false})}}
                        className="iconSearchMobile"
                    />
                    <arrow className="up"/>
                    </div>
                }
                {
                    this.state.showSearchBar &&
                    <SearchField 
                        placeholder="Search for another artist"
                        className="searchBarMobile slide"
                    />
                }
            </header>
        )
    }
}


const mapStateToProps = state => {
    return {
        showSearchInHeader: state.showSearchInHeader,
        isMobile: state.isMobile
    };
}

export default connect(mapStateToProps, null)(HeaderMobile);
