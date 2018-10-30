import React, { Component } from 'react';
//CSS
import './Header.css'
//Components
import SearchField from '../SearchField'
import HeaderMobile from '../HeaderMobile'
import LogoHeader from '../LogoHeader'
//Redux
import { connect } from 'react-redux';

export class Header extends Component {

    render() {
        return (
            <header className="header">
            {
                !this.props.isMobile &&
                <div className="notMobile">
                {
                    this.props.showSearchInHeader ?
                    <LogoHeader className="ref"/>
                    :
                    <LogoHeader className="ref center"/>    
                }
                {
                    this.props.showSearchInHeader &&
                    <SearchField 
                        placeholder="Search for another artist"
                    />
                }
                </div>
            }
            {
                this.props.isMobile &&
                <HeaderMobile/>
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

export default connect(mapStateToProps, null)(Header);
