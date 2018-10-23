import React, { Component } from 'react';

//Icon
import star from '../../assets/star.png';
import starSelected from '../../assets/starSelected.png';
//CSS
import './TrackAlbumList.css'

class TrackAlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelected : false,
        }
    }
    render() {
        if(this.state.isSelected){
            return (
                <div className="trackAlbumList">
                    <p className="titleTrack">{this.props.track.name}</p>
                    <img 
                        className="favAddImg"
                        src={starSelected}
                        alt="Delete from favorite"
                    >
                    </img>
                </div>
            ) 
        }else{
            return (
                <div className="trackAlbumList">
                    <p className="titleTrack">{this.props.track.name}</p>
                    <img 
                        className="favAddImg"
                        src={star}
                        alt="Add to favorite"
                    >
                    </img>
                </div>
            )    
        } 
    }
}

export default TrackAlbumList;
