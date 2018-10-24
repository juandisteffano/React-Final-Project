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
                <h2 className="albumDiscTitle">{"CD " + this.props.discNumber}</h2>
                <div className="tracksList">
                    {tracks}
                </div>
            </div>
        )
    }  
    
}

export default AlbumDisc;
