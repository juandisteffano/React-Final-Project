import React, { Component } from 'react';

//CSS
import './Track.css'
//Icon
import starSelected from '../../assets/starSelected.png';

class Track extends Component {
    
    render() {
        return (
            <div className="track">
                <img 
                    className="imgTrack vertical-center"
                    src={this.props.track.urlCover}
                    alt={"Front cover of the album " + this.props.track.album + " by " + this.props.track.artist}
                ></img>
                <div className="infoTrack vertical-center">
                    <p className="titleTrack">{this.props.track.name}</p>
                    <p className="artistTrackName">{"Artist: " + this.props.track.artist}</p>
                    <p className="albumTrackName">{"Album: " + this.props.track.album}</p>
                </div>
                <img 
                    className="iconStarSelected"
                    src={starSelected}
                    alt={"Delete from favorites"}
                    onClick={()=>alert("Eliminar")}
                ></img>
            </div>
        )     
    }
}

export default Track;
