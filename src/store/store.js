import { createStore } from 'redux';


const initialState = {
    favoriteSongsList: []
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
                favoriteSongsList:state.favoriteSongsList.filter( song => song.id!==action.song.id)
            }
        default:
            return state;
    }
};


const store = createStore(reducer, initialState);


export default store;