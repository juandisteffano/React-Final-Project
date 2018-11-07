import React, { Component } from 'react';
//CSS
import './Track.css'
//Components
import FavIcon from '../../components/FavIcon'
//Model
import { parseToTrackModel } from '../../Models/TrackModel'

class Track extends Component {
    
    render() {
        const trackModel = parseToTrackModel(this.props.track);
        
        return (
            <div className="track">
                <img 
                    title={trackModel.name}
                    className="imgTrack vertical-center"
                    src={trackModel.urlCover}
                    alt={"Front cover of the album " + trackModel.album + " by " + trackModel.artist}
                />
                <div className="infoTrack vertical-center" >
                    <p className="titleTrack">{trackModel.name}</p>
                    <p className="artistTrackName">{"Artist: " + trackModel.artist}</p>
                    <p className="albumTrackName">{"Album: " + trackModel.album}</p>
                </div>
                <FavIcon
                    track={trackModel}
                />
            </div>
        )     
    }
}

export default Track;
