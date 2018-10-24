import React, { Component } from 'react';

//CSS
import './AlbumDisc.css'
//Components
import TrackAlbumList from '../../components/TrackAlbumList'

class AlbumDisc extends Component {
    render() {
        const tracks = this.props.album.map( (song, index) => {
            return <TrackAlbumList track={song} key={index} onlyInfo={false}/>
        })

        return (
            <div className="albumDisc">
                <p className="albumDiscTitle">{"CD " + this.props.discNumber}</p>
                <div className="tracksList">
                    {tracks}
                </div>
            </div>
        )
    }  
    
}

export default AlbumDisc;
