import React, { Component } from 'react';

//CSS
import './ArtistView.css'

//Components
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'
import Album from '../../components/Album'

//Model
import ArtistModel from '../../Models/ArtistModel'
import AlbumModel from '../../Models/AlbumModel'


class ArtistView extends Component {
    constructor(props){
        super(props)
        this.state = {
            artist: new ArtistModel("3SuDVRoeAU00LbpCeMgxGx", "Oasis", "Rock", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
        }
    }
    render() {
        this.state.artist.addAlbum(new AlbumModel("id", "Disco1", "Oasis", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco2", "Oasis", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco3", "Oasis", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco4", "Oasis", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco5", "Oasis", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        const albums = this.state.artist.albums.map( (album, index) => {
            return (
                <Album album={album} key={index} onlyInfo={false}></Album>
            )
        })
        return(
            <article className="artistView">
                <Artist
                    artist={this.state.artist}
                    onlyInfo={true}
                ></Artist>
                ----PATH---
                <ListElements
                    elements={albums}
                    msj="No Albums"
                ></ListElements>
            </article>
        )
    }
}

export default ArtistView;
