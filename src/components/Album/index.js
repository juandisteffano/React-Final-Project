import React, { Component } from 'react';

//CSS
import './Album.css'

class Album extends Component {

    render() {
        return(
            <div>
            {
                this.props.onlyInfo &&
                    <div className="albumOnlyInfo">{this.props.className}
                        <img 
                            className="imgAlbumInfo vertical-center"
                            src={this.props.album.urlCover}
                            alt={"Logo " + this.props.album.name}
                        />
                        <div className="infoAlbum vertical-center">
                            <p className="nameAlbumOnlyInfo">{this.props.album.name}</p> 
                            <p className="artistAlbum">{this.props.album.artist}</p>
                            <p className="yearAlbum">{this.props.album.year}</p>
                        </div>
                    </div>
            }
            {
                !this.props.onlyInfo &&
                <a 
                    href={"/album/" + this.props.album.id}
                    className="album"
                    title={this.props.album.name}
                >
                    <img 
                        className="imgAlbum vertical-center"
                        src={this.props.album.urlCover}
                        alt={"Logo " + this.props.album.name}
                    />
                    <div className="infoAlbum vertical-center">
                        <p className="nameAlbum">{this.props.album.name}</p>
                        <p className="yearAlbum">{this.props.album.year}</p>
                    </div>
                </a> 
            } 
            </div>
        )   
    }


}

export default Album;
