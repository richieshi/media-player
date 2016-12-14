import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import FontAwesome from 'react-fontawesome';

class MusicControls extends React.Component {

    render() {
        const { isPlaying, onPlay, onPause } = this.props;

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
                {isPlaying ? pauseBtn : playBtn}
                {nextBtn}
            </div>
        );
    }
}

MusicControls.propTypes = {
    // store's state and dispatches
    isPlaying: React.PropTypes.bool.isRequired,
    onPlay: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired
};

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
        }
    }
};

MusicControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicControls);

export default MusicControls;
