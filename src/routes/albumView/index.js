import React, { Component } from 'react';
//CSS
import './AlbumView.css'
//Components
import Album from '../../components/Album'
import ListSongsAlbum from '../../components/ListSongsAlbum'
import PathBar from '../../components/PathBar'
import LoadingBar from '../../components/LoadingBar'
//Util
import { getAlbum } from '../../Utils/parser'
//Redux
import { connect } from 'react-redux';
//Utils
import { getAlbumViewPahts } from '../../Utils/paths'

export class AlbumView extends Component {

    constructor(props){
        super(props)
        this.state = {
            album: null
        }
    }

    render() {
        if (this.state.album){
            return(
                <article className="albumView">
                    <Album
                        album={this.state.album}
                        onlyInfo={true}
                    />

                    <PathBar
                        pathlist={getAlbumViewPahts(this.props.artistSearchKey, this.state.album.artistId, this.state.album.artist, this.state.album.id, this.state.album.name)}
                    />

                    <ListSongsAlbum
                        album={this.state.album}
                    />

                    
                </article>
            )
        }else{
            return (
                <LoadingBar />
            )
        }
    }

    componentDidMount(){
        this.props.showSearchInHeader(true);
        getAlbum(this.props.match.params.idalbum, this.props.config)
            .then(
                (data) => {this.setState({album: data})}
                )
            .catch(error => console.error(error)) 
    }
}

const mapStateToProps = state => {
    return {
        config: state.config,
        artistSearchKey: state.artistSearchKey,
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);
