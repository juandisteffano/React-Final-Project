import React, { Component } from 'react';
//CSS
import './TrackAlbumList.css'
//Components
import FavIcon from '../../components/FavIcon'
import AudioPlayer from '../AudioPlayer'

export default class TrackAlbumList extends Component {
    
    render() {
        return (  
            <div className="trackAlbumList">
                { 
                    this.props.track.urlPreviewAudio &&
                    <AudioPlayer
                        streamUrl={this.props.track.urlPreviewAudio}
                        preloadType="auto"
                    />
                }
                <p className="titleTrackAlbumList">{this.props.track.trackNumber + " - " + this.props.track.name}</p>
                <FavIcon
                    track={this.props.track}
                />
            </div>
        )
    }
}
