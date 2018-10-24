import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        this.state.artist.addAlbum(new AlbumModel("id", "Disco1", "Oasis", "artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco2", "Oasis", "artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco3", "Oasis", "artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco4", "Oasis", "artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        this.state.artist.addAlbum(new AlbumModel("id", "Disco5", "Oasis", "artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"));
        const albums = this.state.artist.albums.map( (album, index) => {
            return (
                <Album album={album} key={index} onlyInfo={false}/>
            )
        })
        return(
            <article className="artistView">
                <Artist
                    artist={this.state.artist}
                    onlyInfo={true}
                />

                <div className="pathNav">
                    <Link to="/">Home</Link> -> 
                    <Link to={"/search/" + this.state.artist.name}>Artist</Link> ->
                    <Link to={"/artist/" + this.state.artist.id}>{this.state.artist.name}</Link>  
                </div>

                <ListElements
                    elements={albums}
                    msj="No Albums"
                />
            </article>
        )
    }
}

export default ArtistView;
