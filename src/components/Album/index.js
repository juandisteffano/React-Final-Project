import React, { Component } from 'react';

//CSS
import './Album.css'

class Album extends Component {
    
    render() {
        if(this.props.onlyInfo){
            return(
                <div className="albumOnlyInfo">
                    <img 
                        className="imgAlbumInfo vertical-center"
                        src={this.props.album.urlCover}
                        alt={"Logo " + this.props.album.name}
                    ></img>
                    <div className="infoAlbum vertical-center">
                        <p className="nameAlbum">{this.props.album.name}</p>
                        <p className="artistAlbum">{this.props.album.artist +" - " + this.props.album.year}</p>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="album" onClick={() => alert(this.props.album.name)}>
                    <img 
                        className="imgAlbum vertical-center"
                        src={this.props.album.urlCover}
                        alt={"Logo " + this.props.album.name}
                    ></img>
                    <div className="infoAlbum vertical-center">
                        <p className="nameAlbum">{this.props.album.name}</p>
                        <p className="yearAlbum">{this.props.album.year}</p>
                    </div>
                </div>
            ) 
        }    
    }
}

export default Album;
