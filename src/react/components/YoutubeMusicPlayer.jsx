import React from 'react';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';

class YoutubeMusicPlayer extends React.Component {

    constructor() {
        super();
        this._onReady = this._onReady.bind(this);
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

    render() {
        let { videoId, opts } = this.props;

        return (
            <div className='youtube-music'>
                <Youtube
                    ref='musicPlayer'
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady} />
            </div>
        ); 
    }
}

YoutubeMusicPlayer.propTypes = {
    videoId: React.PropTypes.string.isRequired,
    opts: React.PropTypes.object,
    // store's state
    isPlaying: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isPlaying: state.isPlaying
    }
};

YoutubeMusicPlayer = connect(mapStateToProps)(YoutubeMusicPlayer)

export default YoutubeMusicPlayer;
