import React, { Component } from 'react';

//CSS
import './Track.css'

class Track extends Component {
    
    render() {
        return (
            <div className="track">
                <img 
                    className="imgTrack"
                    src={this.props.track.urlCover}
                    alt={"Album Cover " + this.props.track.album + " from " + this.props.track.artist}
                ></img>
                <div className="infoTrack">
                    <p className="title">{this.props.track.name}</p>
                    <p className="artist">{"Artist: " + this.props.track.artist}</p>
                    <p className="album">{"Album: " + this.props.track.album}</p>
                </div>
            </div>
        )     
    }
}

export default Track;
