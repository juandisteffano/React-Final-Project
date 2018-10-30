import React, { Component } from 'react';
//Components
import ListElements from '../../components/ListElements'
import Album from '../../components/Album'


export default class ListAlbums extends Component {

    render() {
        return(
            <ListElements
                elements={this.props.albums ? this.renderAlbums(this.props.albums) : null}
                msj="No Albums"
            />
        )
    }

    renderAlbums(albums){
        const albumsRes = albums.map( (album, index) => {
            return (
                <Album album={album} key={index} onlyInfo={false}/>
            )
        })
        return albumsRes;
    }
}
