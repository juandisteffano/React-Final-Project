import React, { Component } from 'react';

//CSS
import './Track.css'

//Components
import FavIcon from '../../components/FavIcon'

class Track extends Component {
    
    render() {
        return (
            <div className="track">
                <img 
                    className="imgTrack vertical-center"
                    src={this.props.track.urlCover}
                    alt={"Front cover of the album " + this.props.track.album + " by " + this.props.track.artist}
                />
                <div className="infoTrack vertical-center">
                    <p className="titleTrack">{this.props.track.name}</p>
                    <p className="artistTrackName">{"Artist: " + this.props.track.artist}</p>
                    <p className="albumTrackName">{"Album: " + this.props.track.album}</p>
                </div>
                <FavIcon
                    track={this.props.track}
                />
            </div>
        )     
    }
}

export default Track;
