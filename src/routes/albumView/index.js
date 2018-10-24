import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './AlbumView.css'

//Components
import Album from '../../components/Album'
import ListSongsAlbum from '../../components/ListSongsAlbum'

//Model
import AlbumModel from '../../Models/AlbumModel'
import TrackModel from '../../Models/TrackModel'



class AlbumView extends Component {
    constructor(props){
        super(props)
        this.state = {
            album: new AlbumModel("id", "Disco1", "Oasis","artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
        }
    }
    render() {
        this.state.album.addTrack(new TrackModel("id","track1","artist", "album",1,"https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"))
        this.state.album.addTrack(new TrackModel("id","track2","artist", "album",1,"https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"))
        this.state.album.addTrack(new TrackModel("id","track3","artist", "album",1,"https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"))
        this.state.album.addTrack(new TrackModel("id","track4","artist", "album",3,"https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"))
        this.state.album.addTrack(new TrackModel("id","track5","artist", "album",2,"https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"))
      
        return(
            <article className="albumView">
                <Album
                    album={this.state.album}
                    onlyInfo={true}
                />

                <div className="pathNav">
                    <Link to="/">Home</Link> -> 
                    <Link to={"/search/" + this.state.album.artist}>Artist</Link> -> 
                    <Link to={"/artist/" + this.state.album.artistId}>{this.state.album.artist}</Link> -> 
                    <Link to={"/album/" + this.state.album.id}>{this.state.album.name}</Link>
                </div>

                <ListSongsAlbum
                    album={this.state.album}
                />
            </article>
        )
    }
}

export default AlbumView;

/*
<ListElements
elements={songs}
msj="No Albums"
></ListElements>
*/