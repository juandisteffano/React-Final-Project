import React, { Component } from 'react';

//CSS
import './HomeView.css'
//Model
import TrackModel from '../../Models/TrackModel'
//Components
import InfoApp from '../../components/InfoApp'
import SearchField from '../../components/SearchField'
import ListElements from '../../components/ListElements'
import Track from '../../components/Track'


class HomeView extends Component {

    constructor(props){
        super(props)
        this.state = {
            favoriteSongsList: [ new TrackModel("3SuDVRoeAU00LbpCeMgxGx", "D'You Know What I Mean?", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                  new TrackModel("7KtsHby5D21gJbLGH5Jymo", "My Big Mouth", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                  new TrackModel("3SuDVRoeAU00LbpCeMgxGx", "D'You Know What I Mean?", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                  new TrackModel("7KtsHby5D21gJbLGH5Jymo", "My Big Mouth", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                  new TrackModel("3SuDVRoeAU00LbpCeMgxGx", "D'You Know What I Mean?", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046"),
                                  new TrackModel("7KtsHby5D21gJbLGH5Jymo", "My Big Mouth", "Oasis", "Be Here Now", 1, "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046")
                                ]
        }
    }

     

    render() {

        const songs = this.state.favoriteSongsList.map( (song, index) => {
            return (
                <Track track={song} key={index} />
            )
        })
   
            return (
                <article className="home-view">
                    <InfoApp />
                    <SearchField
                        placeholder="Type the name of your favorite artist"
                        className="vertical-center horizontal-center" 
                    />
                    { 
                        this.state.favoriteSongsList.length > 0 &&
                        <ListElements
                            elements={songs}
                            msj="No Favorite songs" 
                        /> 
                    }
                </article>
            )
      
    }

    

    
    

}

export default HomeView;
