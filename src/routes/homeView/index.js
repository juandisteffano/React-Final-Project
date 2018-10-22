import React, { Component } from 'react';

//CSS
import './HomeView.css'

//Components
import InfoApp from '../../components/InfoApp'
import SearchField from '../../components/SearchField'
import FavoriteSongsList from '../../components/FavoriteSongsList'

class HomeView extends Component {

    constructor(props){
        super(props);
        this.state = {
            showListFavoriteSongs: true,
        }
    }
    render() {
        if(this.state.showListFavoriteSongs){
            return (
                <article className="home-view">
                    Home View
                    <InfoApp></InfoApp>
                    <SearchField
                        placeholder="Type the name of your favorite artist"
                        className="vertical-center horizontal-center"
                    ></SearchField>
                    <FavoriteSongsList></FavoriteSongsList>
                </article>
            )
        }else{
            return (
                <article className="home-view">
                    Home View
                    <InfoApp></InfoApp>
                    <SearchField
                        placeholder="Type the name of your favorite artist"
                        className="vertical-center horizontal-center"
                    ></SearchField>
                </article>
            )
        }
    }
}

export default HomeView;
