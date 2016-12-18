import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import FontAwesome from 'react-fontawesome';
import { Key } from '../../constants/Constants.js';

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
            event.preventDefault();
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
        const { isPlaying, onPlay, onPause, playNext, playPrev, shuffleSongs } = this.props;

        let playBtn = ( 
            <div
                className='control-btn'
                onClick={onPlay}>
                <FontAwesome
                    name='play-circle-o'
                    size='5x' />
            </div>
        );
        let pauseBtn = (
            <div
                className='control-btn'
                onClick={onPause}>
                <FontAwesome
                    name='pause-circle-o'
                    size='5x' />
            </div>
        );
        let nextBtn = (
            <div
                className='control-btn'
                onClick={playNext}>
                <FontAwesome
                    name='step-forward'
                    size='3x' />
            </div>
        );
        let prevBtn = (
            <div
                className='control-btn'
                onClick={playPrev}>
                <FontAwesome
                    name='step-backward'
                    size='3x' />
            </div>
        );
        let shuffleBtn = (
            <div
                className='secondary-btn'
                onClick={shuffleSongs}>
                <FontAwesome
                    name='random'
                    size='lg' />
            </div>
        );

        return (
            <div id='music-controls'>
                {prevBtn}
                {isPlaying ? pauseBtn : playBtn}
                {nextBtn}
                {shuffleBtn}
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
        },
        shuffleSongs: () => {
            dispatch(Actions.shuffleSongs());
        }
    }
};

MusicControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicControls);

export default MusicControls;
