import React, { Component } from 'react';

//Icon
import star from '../../assets/star.png';
import starSelected from '../../assets/starSelected.png';
//CSS
import './FavIcon.css'

//Model
import { parseToTrackModel } from '../../Models/TrackModel'

//Redux
import { connect } from 'react-redux';


export class FavIcon extends Component {
    render() {
        const trackModel = parseToTrackModel(this.props.track);
        return ( 
            <div className="favIcon">
                {
                this.isFavoriteSong(trackModel, this.props.favoriteSongsList) ?
                    <img 
                        className="favImg"
                        src={starSelected}
                        alt="Delete from favorite"
                        onClick={() => this.props.handleDeleteClick(trackModel)}
                    />
                :
                    <img 
                        className="favImg"
                        src={star}
                        alt="Add to favorite"
                        onClick={() => this.props.handleAddClick(trackModel)}
                    />
                }
            </div>
        )    
    }

    isFavoriteSong(song, list){
        let isFavorite = false;
        list.forEach((elem) => {
            const trackModel = parseToTrackModel(elem);
            if(trackModel.id === song.id)
                isFavorite = true;
        })
        return isFavorite;
    }
}


const mapStateToProps = state => {
    return {
        favoriteSongsList: state.favoriteSongsList,
    };
}
  
const mapDispatchToProps = dispatch => {
    return{
        handleAddClick(song){
            const action = {
                type: "ADD_SONG",
                song
            }
            dispatch(action);
        },
        handleDeleteClick(song){
            const action = {
                type: "DELETE_SONG",
                song
            }
            dispatch(action);
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FavIcon);



