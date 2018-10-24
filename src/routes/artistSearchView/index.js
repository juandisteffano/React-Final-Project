import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './ArtistSearchView.css'

//Components
import SearchField from '../../components/SearchField'
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'

//Api
import {searchArtists} from '../../api/api'

class ArtistSearchView extends Component {
    constructor(props){
        super(props)
        this.state = {
            artistsSearchList: []
        }
    }
    render() {
        const artists = this.state.artistsSearchList.map( (artist, index) => {
            return (
                <Artist artist={artist} key={index} onlyInfo={false} />
            )
        })

        return(
            <article className="artistSearchView">
                <div className="infoArtistSearchView">
                    <h2>Artists</h2>
                    <h3>You are currently searching: "{this.props.match.params.searchkey}"</h3>
                </div>
                <SearchField
                    placeholder="Search for your favorite artist here"
                    className="vertical-center horizontal-center"
                />
                
                <div className="pathNav">
                    <Link to="/">Home</Link> -> 
                    <Link to={"/search/" + this.props.match.params.searchkey}>Artist</Link>
                </div>
                
                <ListElements
                    elements={artists}
                    msj="No Favorite songs"
                />

            </article>
        )
    }

    componentDidMount(){
        try{
            searchArtists("Ciro")
            .then(
                (data) => {this.setState({artistsSearchList: data})}
                )
        }catch(err){
            console.log("Error: "+ err)
        }
    }

}

export default ArtistSearchView;
