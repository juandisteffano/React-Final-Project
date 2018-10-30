import { createStore } from 'redux';
import { compose, applyMiddleware } from 'redux';
//Model
import { parseToTrackModel } from '../Models/TrackModel'
//Utils
import sortSongsDuration from '../Utils/orderList'

const initialState = {
    favoriteSongsList: [],
    showSearchInHeader: true,
    config: {},
    isMobile: false,
    artistSearchKey: null,
}

const reducer = (state=initialState, action)=>{

    switch(action.type){
        case 'ADD_SONG':
            return {
                ...state,
                favoriteSongsList: state.favoriteSongsList.concat(action.song),
            }
          
        case 'DELETE_SONG':
            return {
                ...state, 
                favoriteSongsList:state.favoriteSongsList.filter( song => parseToTrackModel(song).id!==action.song.id)
            }
          
        case 'SHOW_SEARCH_IN_HEADER':
            return {
                ...state, 
                showSearchInHeader: action.showSearchInHeader
            }
          
        case 'SET_CONFIG':
            return {
                ...state, 
                config: action.config
            }
          
        case 'IS_MOBILE':
            return {
                ...state, 
                isMobile: action.isMobile
            }
          
        case 'CLEAN_FAV_LIST':
            return {
                ...state, 
                favoriteSongsList: []
            }
          
        case 'SORT':
            return {
                ...state, 
                favoriteSongsList: sortSongsDuration(state.favoriteSongsList, action.orderBy)
            }
          
        case 'SET_ARTISTS_SEARCH_KEY':
            return {
                ...state, 
                artistSearchKey: action.artistSearchKey
            }
          
        case 'SET_ARTISTS_ID':
            return {
                ...state, 
                artistId: action.artistId
            }
          
        case 'SET_ALBUM_ID':
            return {
                ...state, 
                albumId: action.albumId
            }

        default:
            return state;
    }
};

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
      const result = next(action);
      localStorage.setItem('applicationState', JSON.stringify(
        getState()
      ));
      return result;
    };
  };

const store = compose(applyMiddleware(localStorageMiddleware))(createStore)(
    reducer,
    localStorage.getItem('applicationState') ? JSON.parse(localStorage.getItem('applicationState')) : initialState
)  

export default store;
