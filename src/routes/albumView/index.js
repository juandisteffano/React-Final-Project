import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './AlbumView.css'

//Components
import Album from '../../components/Album'
import ListSongsAlbum from '../../components/ListSongsAlbum'

//Model
//import AlbumModel from '../../Models/AlbumModel'
//import TrackModel from '../../Models/TrackModel'

//Util
import { getAlbum } from '../../Utils/parser'


class AlbumView extends Component {
    constructor(props){
        super(props)
        this.state = {
            //album: new AlbumModel("id", "Disco1", "Oasis","artistId", "1995", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
            album: null
        }
    }
    render() {

        //Acomodar cuando album es null
        if(this.state.album){
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
        }else{
            return null;
        }
    }

    componentDidMount(){
        getAlbum(this.props.match.params.idalbum)
            .then(
                (data) => {this.setState({album: data})}
                )
            .catch(error => console.error(error)) 
    }
}

export default AlbumView;

/*
<ListElements
elements={songs}
msj="No Albums"
></ListElements>
*/