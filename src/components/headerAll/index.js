import React, { Component } from 'react';
//CSS
import './HeaderAll.css'
//Components
import SearchField from '../SearchField'
import LogoHeader from '../LogoHeader'
//Redux
import { connect } from 'react-redux';
//Logo
import magnifyingGlass from '../../assets/magnifyingGlass.png';

export class HeaderAll extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSearchBar: false,
        }
    }

    render() {
        return (
            <header className={this.props.showSearchInHeader ? "header" : "header center"}>
                <LogoHeader /> 

                { 
                    this.props.showSearchInHeader &&
                    <SearchField 
                        placeholder="Search for another artist"
                    />
                }
                
                { 
                    this.props.showSearchInHeader &&
                    <div className="iconSearchMobile">
                        <img 
                            src={magnifyingGlass} 
                            alt="Search button" 
                            onClick={() => {this.setState({showSearchBar: !this.state.showSearchBar})}}
                            className="iconSearchMobile"
                        />
                        {
                            this.state.showSearchBar ?
                            <arrow className="down"/>
                            :
                            <arrow className="up"/>
                        }
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

export default connect(mapStateToProps, null)(HeaderAll);
