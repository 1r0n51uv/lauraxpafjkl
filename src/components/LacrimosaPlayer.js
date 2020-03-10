import React, {Component} from 'react';
import lacrima from './../assets/src_Mozart - Lacrimosa.mp3';
import H5AudioPlayer from "react-h5-audio-player";

class LacrimosaPlayer extends Component {
    render() {
        return (
            <H5AudioPlayer
                autoPlay
                src={lacrima}
                onPlay={e => console.log("onPlay")}
                // other props here
            />
        );
    }
}

export default LacrimosaPlayer;
