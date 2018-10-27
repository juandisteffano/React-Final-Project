import React, { Component } from 'react';

//CSS
import './TrackAlbumList.css'

//Components
import FavIcon from '../../components/FavIcon'
//import AudioPlayer from 'react-custom-audio-player';
    
import AudioPlayer from '../AudioPlayer'

 

export default class TrackAlbumList extends Component {
    
 


    render() {
        return (  
                <div className="trackAlbumList">
                    { 
                        this.props.track.urlPreviewAudio &&
                        <AudioPlayer
                            streamUrl={this.props.track.urlPreviewAudio}
                            preloadType="auto"
                        />
                    }
                    <p className="titleTrackAlbumList">{this.props.track.trackNumber + " - " + this.props.track.name}</p>
                    <FavIcon
                        track={this.props.track}
                    />
                </div>
        )
            
    }
}


/*
<AudioPlayer 
                        src={this.props.track.urlPreviewAudio}
                        className="vertical-center"
                    />

                    { 
                        this.props.track.urlPreviewAudio &&
                        <audio controls className="audioControls horizontal-center">
                            <source src={this.props.track.urlPreviewAudio} type="audio/mpeg" />
                        </audio>
                    }


                    
.audioControls{
    display: block;
    clear: both;
    margin-bottom: 1%;
}

.audio_player{
    box-sizing: border-box;
    float: left;
    width: 75px;
    border: 1px solid black;
}

.ivrplaybtn{
    float: left;
    margin-left: 25%;
    margin-top: 25%;
    zoom: 1.5;
}

.ivrpausebtn{
    float: left;
    margin-left: 25%;
    margin-top: 25%;
    zoom: 1.5;

}

.audio_time_progress{
    display: block;
    float: none;
    margin-left: 32%;
}


.spinner{
    float: left;
    visibility: hidden;
    width: 1%;
}

.reload-icon{
    float: left;
    visibility: hidden;
    width: 1%;
}

.remaining-time{
    float: left;
    visibility: hidden;
    width: 1%;
}
.btn{
    float: left;
    visibility: hidden;
    width: 1%;
}
.audio_info{
    float: left;
    visibility: hidden;
    width: 1%;
}


*/