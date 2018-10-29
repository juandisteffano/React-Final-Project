import React, { Component } from 'react';

//CSS
import './Artist.css'

class Artist extends Component {

    render() {
        if(this.props.onlyInfo){
            return(
                <div className="artistOnlyInfo">
                    <img 
                        className="imgArtistInfo vertical-center"
                        src={this.props.artist.urlCover}
                        alt={"Logo " + this.props.artist.name}
                    />
                    <div className="infoArtist vertical-center">
                        <p className="nameArtistOnlyInfo">{this.props.artist.name}</p>
                        <p className="genereArtist">{this.props.artist.genres}</p>
                    </div>
                </div>
            )
        }else{
            return (
                <a 
                    className="artist" 
                    href={"/artist/" + this.props.artist.id}
                    title={this.props.artist.name}
                >
                    <img 
                        className="imgArtist vertical-center"
                        src={this.props.artist.urlCover}
                        alt={"Logo " + this.props.artist.name}
                    />
                    <div className="infoArtist vertical-center">
                        <p className="nameArtist">{this.props.artist.name}</p>
                    </div>
                </a>
            ) 
        }    
    }

  
}

export default Artist;
