import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import FontAwesome from 'react-fontawesome';

const Key = {
    SPACE: 32,
    n_KEY: 110,
    p_KEY: 112
}

class MusicControls extends React.Component {

    constructor() {
        super();
        this._togglePlay = this._togglePlay.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keypress', this._togglePlay);
    }

    componentWillUnmount() {
        document.addEventListener('keypress', this._togglePlay);
    }

    _togglePlay(event) {
        if (event.keyCode === Key.SPACE) {
            if (this.props.isPlaying) {
                this.props.onPause();
            } else {
                this.props.onPlay();
            }
        } else if (event.keyCode === Key.n_KEY) {
            this.props.playNext();
        } else if (event.keyCode === Key.p_KEY) {
            this.props.playPrev();
        }
    }

    render() {
        const { isPlaying, onPlay, onPause, playNext, playPrev } = this.props;

        let playBtn = ( 
            <div
                id='control-btn'
                onClick={onPlay}>
                <FontAwesome
                    name='play-circle-o'
                    size='5x' />
            </div>
        );
        let pauseBtn = (
            <div
                id='control-btn'
                onClick={onPause}>
                <FontAwesome
                    name='pause-circle-o'
                    size='5x' />
            </div>
        );
        let nextBtn = (
            <div
                id='control-btn'
                onClick={playNext}>
                <FontAwesome
                    name='step-forward'
                    size='3x' />
            </div>
        );
        let prevBtn = (
            <div
                id='control-btn'
                onClick={playPrev}>
                <FontAwesome
                    name='step-backward'
                    size='3x' />
            </div>
        );

        return (
            <div id='music-controls'>
                {prevBtn}
                {isPlaying ? pauseBtn : playBtn}
                {nextBtn}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isPlaying: state.isPlaying
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPlay: () => {
            dispatch(Actions.setPlayCurrentSong(true));
        },
        onPause: () => {
            dispatch(Actions.setPlayCurrentSong(false));
        },
        playNext: () => {
            dispatch(Actions.playNext());
        },
        playPrev: () => {
            dispatch(Actions.playPrev());
        }
    }
};

MusicControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicControls);

export default MusicControls;
