import React from 'react';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import FontAwesome from 'react-fontawesome';

class YoutubeMusic extends React.Component {

    constructor() {
        super();
        this.state = ({
            isPlaying: false
        });
        this._onPlay = this._onPlay.bind(this);
        this._onPause = this._onPause.bind(this);
        this._renderMusicControls = this._renderMusicControls.bind(this);
    }

    _onPlay() {
        this.setState({
            isPlaying: true
        });
    }

    _onPause() {
        this.setState({
            isPlaying: false
        });
    }

    _renderMusicControls() {
        let playBtn = ( 
            <div
                id='control-btn'
                onClick={this._onPlay}>
                <FontAwesome
                    name='play-circle-o'
                    size='5x' />
            </div>
        );
        let pauseBtn = (
            <div
                id='control-btn'
                onClick={this._onPause}>
                <FontAwesome
                    name='pause-circle-o'
                    size='5x' />
            </div>
        );
        let nextBtn = (
            <div id='control-btn'>
                <FontAwesome
                    name='step-forward'
                    size='3x' />
            </div>
        );
        let prevBtn = (
            <div id='control-btn'>
                <FontAwesome
                    name='step-backward'
                    size='3x' />
            </div>
        );

        return (
            <div id='music-controls'>
                {prevBtn}
                {this.state.isPlaying ? pauseBtn : playBtn}
                {nextBtn}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this._renderMusicControls()}
            </div>
        );
    }
}

export default YoutubeMusic;
