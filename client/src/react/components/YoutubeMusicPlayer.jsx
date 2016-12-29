import React from 'react';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';
import Actions from '../actions/Actions.js';

class YoutubeMusicPlayer extends React.Component {

    constructor() {
        super();
        this._onEnd = this._onEnd.bind(this);
    }

    componentDidUpdate() {
        const musicPlayer = this.refs.musicPlayer.internalPlayer;
        if (this.props.isPlaying) {
            musicPlayer.playVideo();
        } else {
            musicPlayer.pauseVideo();
        }
    }

    _onReady(event) {
        event.target.pauseVideo();
    }

    _onEnd() {
        this.props.playNext();
    }

    render() {
        let { videoId, opts } = this.props;

        return (
            <div className='youtube-music-player'>
                <Youtube
                    ref='musicPlayer'
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd} />
            </div>
        ); 
    }
}

YoutubeMusicPlayer.propTypes = {
    videoId: React.PropTypes.string.isRequired,
    opts: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        isPlaying: state.isPlaying
    };
};

const mapDispatchToStore = (dispatch) => {
    return {
        playNext: () => {
            dispatch(Actions.playNext())
        }
    };
};

YoutubeMusicPlayer = connect(mapStateToProps, mapDispatchToStore)(YoutubeMusicPlayer)

export default YoutubeMusicPlayer;
