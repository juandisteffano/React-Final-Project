import React, { Component } from 'react';

//CSS
import './TrackAlbumList.css'

//Components
import FavIcon from '../../components/FavIcon'


export default class TrackAlbumList extends Component {
    render() {
        return (  
            
                <div className="trackAlbumList">
                    <p className="titleTrackAlbumList">{this.props.track.trackNumber + " - " + this.props.track.name}</p>
                    <FavIcon
                        track={this.props.track}
                    />
                </div>
        )
            
    }
}





