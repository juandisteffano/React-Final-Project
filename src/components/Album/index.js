import React, { Component } from 'react';

//CSS
import './Album.css'

class Album extends Component {
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    
    render() {
        if(this.props.onlyInfo){
            return(
                <div className="albumOnlyInfo">{this.props.className}
                    <img 
                        className="imgAlbumInfo vertical-center"
                        src={this.props.album.urlCover}
                        alt={"Logo " + this.props.album.name}
                    />
                    <div className="infoAlbum vertical-center">
                        <p className="nameAlbum">{this.props.album.name}</p>
                        
                        <p className="artistAlbum">{this.props.album.artist +" - " + this.props.album.year}</p>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="album" onClick={this.onClickHandler}>
                    <img 
                        className="imgAlbum vertical-center"
                        src={this.props.album.urlCover}
                        alt={"Logo " + this.props.album.name}
                    />
                    <div className="infoAlbum vertical-center">
                        <p className="nameAlbum">{this.props.album.name}</p>
                        <p className="yearAlbum">{this.props.album.year}</p>
                    </div>
                </div>
            ) 
        }    
    }

    onClickHandler(){
        window.location.href = "/album/" + this.props.album.id;

    }
}

export default Album;
