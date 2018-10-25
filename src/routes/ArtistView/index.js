import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './ArtistView.css'

//Components
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'
import Album from '../../components/Album'

//Model
//import ArtistModel from '../../Models/ArtistModel'
//import AlbumModel from '../../Models/AlbumModel'

//Util
import { getArtist } from '../../Utils/parser'

class ArtistView extends Component {
    constructor(props){
        super(props)
        this.state = {
            //artist: new ArtistModel("3SuDVRoeAU00LbpCeMgxGx", "Oasis", "Rock", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
            artist: null,
        }
    }
    render() {
        //Acomodar cuando artist es null
        if(this.state.artist){
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
                        elements={this.state.artist ? this.renderAlbums(this.state.artist) : null}
                        msj="No Albums"
                    />
                </article>
            )
        }else{
            return null
        }
        
    }

    renderAlbums(artist){
        const albums = artist.albums.map( (album, index) => {
            return (
                <Album album={album} key={index} onlyInfo={false}/>
            )
        })
        return albums;
    }
    
    componentDidMount(){
        getArtist(this.props.match.params.idartist)
            .then(
                (data) => {this.setState({artist: data})}
                )
            .catch(error => console.error(error)) 
    }
}

export default ArtistView;
