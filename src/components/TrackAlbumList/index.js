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
        return (  
            
                <div className="trackAlbumList">
                <p className="titleTrack">{this.props.track.name}</p>
                {
                this.state.isSelected ?
                    <img 
                        className="favAddImg"
                        src={starSelected}
                        alt="Delete from favorite"
                    />
                :
                    <img 
                        className="favAddImg"
                        src={star}
                        alt="Add to favorite"
                    />
                }
                </div>
        )
            
    }
}

export default TrackAlbumList;
