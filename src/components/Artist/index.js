import React, { Component } from 'react';

//CSS
import './Artist.css'

class Artist extends Component {
    
    render() {
        return (
            <div className="artist" onClick={() => alert(this.props.artist.name)}>
                <img 
                    className="imgArtist vertical-center"
                    src={this.props.artist.urlCover}
                    alt={"Logo " + this.props.artist.name}
                ></img>
                <div className="infoArtist vertical-center">
                    <p className="nameArtist">{this.props.artist.name}</p>
                </div>
            </div>
        )     
    }
}

export default Artist;
