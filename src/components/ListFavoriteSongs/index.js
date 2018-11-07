import React, { Component } from 'react';
//Components
import ListElements from '../../components/ListElements'
import Track from '../../components/Track'
//Redux
import { connect } from 'react-redux';

export class ListFavoriteSongs extends Component {

    render() {
        const songs = this.props.favoriteSongsList.map( (song, index) => {
            return (
                <Track track={song} key={index} />
            )
        })

        return (
            songs.length > 0 &&
            <ListElements
                elements={songs}
                msj="No Favorite songs" 
            /> 
        )
    }
}

const mapStateToProps = state => {
    return {
        favoriteSongsList: state.favoriteSongsList
    };
}

export default connect(mapStateToProps, null)(ListFavoriteSongs);
