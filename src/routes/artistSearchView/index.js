import React, { Component } from 'react';

//CSS
import './ArtistSearchView.css'

//Components
import SearchField from '../../components/SearchField'
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'
//Model
import ArtistModel from '../../Models/ArtistModel'

class ArtistSearchView extends Component {
    constructor(props){
        super(props)
        this.state = {
            artistsSearchList: [ new ArtistModel("3SuDVRoeAU00LbpCeMgxGx", "Oasis", "Rock", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                new ArtistModel("3SuDVRoeAU00LbpCeMgxGx", "Oasis2", "Rock", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                new ArtistModel("3SuDVRoeAU00LbpCeMgxGx", "Oasis3", "Rock", "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046")
                           
                                ]
        }
    }
    render() {
        const artists = this.state.artistsSearchList.map( (artist, index) => {
            return (
                <Artist artist={artist} key={index}></Artist>
            )
        })
        return(
            <article className="artistSearchView">
                <div className="infoArtistSearchView">
                    <h2>Artists</h2>
                    <h3>You are currently searching: "PONER PARAMS"</h3>
                </div>
                <SearchField
                    placeholder="Search for your favorite artist here"
                    className="vertical-center horizontal-center"
                ></SearchField>
                ----PATH---
                <ListElements
                    elements={artists}
                    msj="No Favorite songs"
                ></ListElements>

            </article>
        )
    }
}

export default ArtistSearchView;
