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
                <p className="titleTrackAlbumList">{this.props.track.name}</p>
                {
                this.state.isSelected ?
                    <img 
                        className="favImg"
                        src={starSelected}
                        alt="Delete from favorite"
                        onClick={()=>{alert("delete")}}
                    />
                :
                    <img 
                        className="favImg"
                        src={star}
                        alt="Add to favorite"
                        onClick={()=>{alert("add")}}
                    />
                }
                </div>
        )
            
    }
}

export default TrackAlbumList;
