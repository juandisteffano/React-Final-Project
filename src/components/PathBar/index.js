import React, { Component } from 'react';

//CSS
import './PathBar.css'

//Components
//import Album from '../../components/Album'
//import ListSongsAlbum from '../../components/ListSongsAlbum'

//Redux
import { connect } from 'react-redux';

export class PathBar extends Component {
    render() {
            return(
                null
            )
    }
}

const mapStateToProps = state => {
    return {
        pathList: state.config
    };
}

const mapDispatchToProps = dispatch => {
    return{
        showSearchInHeader(showSearchInHeader){
            const action = {
                type: "SHOW_SEARCH_IN_HEADER",
                showSearchInHeader
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PathBar);
