import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';
import FontAwesome from 'react-fontawesome';

class MusicControls extends React.Component {

    constructor() {
        super();
        this.state = ({
            isPlaying: false
        });
        this._onPlay = this._onPlay.bind(this);
        this._onPause = this._onPause.bind(this);
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

    render() {
        console.log(this.props.isPlaying);
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
}

MusicControls.contextTypes = {
    isPlaying: React.PropTypes.bool
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
        }
    }
};

const MusicControlsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MusicControls);

export default MusicControlsContainer;
