import React, { Component } from 'react';
//CSS
import './ArtistSearchView.css'
//Components
import SearchField from '../../components/SearchField'
import ListArtists from '../../components/ListArtists'
import PathBar from '../../components/PathBar'
//Redux
import { connect } from 'react-redux';
//Utils
import { getArtistSearchViewPahts } from '../../Utils/paths'


export class ArtistSearchView extends Component {
 
    render() {
        return(
            <article className="artistSearchView">
                <div className="infoArtistSearchView">
                    <h2>Artists</h2>
                    <h3>You are currently searching: "{this.props.artistSearchKey}"</h3>
                </div>
                
                <SearchField
                    placeholder="Search for your favorite artist here"
                    className="vertical-center horizontal-center"
                />
                
                <PathBar
                    pathlist={getArtistSearchViewPahts(this.props.artistSearchKey)}
                />

                <ListArtists 
                    config={this.props.config}
                />
                
            </article>
        )
    }

    componentWillMount(){
        this.props.setArtistSearchKey(this.props.match.params.searchkey);
        this.props.showSearchInHeader(false);
    }
}

const mapStateToProps = state => {
    return {
        config: state.config,
        artistSearchKey: state.artistSearchKey
    };
}
const mapDispatchToProps = dispatch => {
    return{
        showSearchInHeader: (showSearchInHeader) => {
            const action = {
                type: "SHOW_SEARCH_IN_HEADER",
                showSearchInHeader
            }
            dispatch(action);
        },
        setArtistSearchKey: (artistSearchKey) => {
            const action = {
                type: "SET_ARTISTS_SEARCH_KEY",
                artistSearchKey
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearchView);
