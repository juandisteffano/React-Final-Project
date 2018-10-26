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
                    { 
                        this.props.track.urlPreviewAudio &&
                        <audio controls className="audioControls horizontal-center">
                            <source src={this.props.track.urlPreviewAudio} type="audio/mpeg" />
                        </audio>
                    }
                </div>
        )
            
    }
}
