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

//Utils
import isMobile from '../../Utils/device'
import getAllUrlParams from '../../Utils/urlParser'


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

    componentWillMount(){
        this.props.setIsMobile(isMobile())
    }
    componentDidMount(){
        this.props.showSearchInHeader(false);
        if(getAllUrlParams(this.props.match.url).access_token)
            this.props.setConfig(getAllUrlParams(this.props.match.url).access_token)
    }

    

      
}

const mapStateToProps = state => {
    return {
        favoriteSongsList: state.favoriteSongsList,
        config: state.config
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
        setConfig(ACCESS_TOKEN){
            const action = {
                type: "SET_CONFIG",
                config : {
                    baseUrl : "https://api.spotify.com/v1/",
                    options: {
                        method: 'GET',
                        headers: {
                        'Authorization': 'Bearer ' + ACCESS_TOKEN
                        },
                        mode: 'cors',
                        cache: 'default'
                        },
                    access_token: ACCESS_TOKEN
                }
            }
            dispatch(action);
        },
        setIsMobile(isMobile){
            const action = {
                type: "IS_MOBILE",
                isMobile
            }
            dispatch(action);
        },
        
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeView);
