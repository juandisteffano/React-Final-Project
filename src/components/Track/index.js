import React, { Component } from 'react';

//CSS
import './Track.css'

//Utils
import {getUrlAlbumImg, getAltAlbumImg, getArtistName, getAlbumName, getTrackName} from '../../Utils/trackFunctions.js'


class Track extends Component {
    
    render() {
        return (
            <div className="track">
                <img 
                    className="imgTrack"
                    src={getUrlAlbumImg(this.props.track, 300)}
                    alt={getAltAlbumImg(this.props.track)}
                ></img>
                <div className="infoTrack">
                    <p className="title">{getTrackName(this.props.track)}</p>
                    <p className="artist">{"Artist: " + getArtistName(this.props.track)}</p>
                    <p className="album">{"Album: " + getAlbumName(this.props.track)}</p>
                </div>
            </div>
        )     
    }
}

export default Track;
