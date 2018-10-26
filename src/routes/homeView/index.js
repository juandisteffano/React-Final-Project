import React, { Component } from 'react';

//CSS
import './HomeView.css'

//Components
import InfoApp from '../../components/InfoApp'
import SearchField from '../../components/SearchField'
import ListElements from '../../components/ListElements'
import Track from '../../components/Track'

//Redux
import { connect } from 'react-redux';

export class HomeView extends Component {

    render() {
        const songs = this.props.favoriteSongsList.map( (song, index) => {
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
                        songs.length > 0 &&
                        <ListElements
                            elements={songs}
                            msj="No Favorite songs" 
                        /> 
                    }
                </article>
            )
      
    }

    componentDidMount(){
        this.props.showSearchInHeader(false)
    }
}

const mapStateToProps = state => {
    return {
        favoriteSongsList: state.favoriteSongsList
    };
}

const mapDispatchToProps = dispatch => {
    return{
        showSearchInHeader(showSearchInHeader){
            const action = {
                type: "SHOW_SEARCH_IN_HEADER",
                showSearchInHeader
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
