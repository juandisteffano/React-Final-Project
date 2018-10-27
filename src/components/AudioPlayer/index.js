import React, { Component } from 'react';

//CSS
import './AudioPlayer.css'

    
import { PlayButton } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';




const SoundCustomPlayer = withCustomAudio(props => {
    return (
        <div className="audioPlayer">
            <PlayButton {...props}  className="playButton"/>
        </div>
    );
  });
  
            //<Timer {...props} className="timer"/>

export default class AudioPlayer extends Component {
    render() {
        return (  
            <SoundCustomPlayer {...this.props} />
        )     
    }
}

