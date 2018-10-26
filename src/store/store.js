import { createStore } from 'redux';

import { compose, applyMiddleware } from 'redux';

//Model
import { parseToTrackModel } from '../Models/TrackModel'

const initialState = {
    favoriteSongsList: [],
    showSearchInHeader: true,
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
//const store = createStore(reducer, initialState);


export default store;