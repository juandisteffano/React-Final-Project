import React, { Component } from 'react';

//CSS
import './ListSongsAlbum.css'
//Components
import AlbumDisc from '../../components/AlbumDisc'

class ListSongsAlbum extends Component {
    render() {
        let albumsCD = [];
        this.props.album.tracks.forEach(song => {
            if(albumsCD[song.albumDiscNumber]){
                albumsCD[song.albumDiscNumber].push(song)
            }else{
                albumsCD[song.albumDiscNumber] = [];
                albumsCD[song.albumDiscNumber].push(song);
            }
        });

        const albums = albumsCD.map( (album, index) => {
           return (
                <AlbumDisc
                    album={album}
                    discNumber={index}
                    key={index}
                />
           )
        })

        return (
            <section className="listSongsAlbum">
                {albums}            
            </section>
        )     
    }
}

export default ListSongsAlbum;
