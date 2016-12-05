import React from 'react';
import Youtube from 'react-youtube';

class YoutubeMusicPlayer extends React.Component {

    _onReady(event) {
        event.target.pauseVideo();
    }

    render() {
        let { videoId, opts } = this.props;

        return (
            <div className='youtube-music'>
                <Youtube
                    videoId={videoId}
                    opts={opts}
                    onReady={this._onReady} />
            </div>
        ); 
    }
}

YoutubeMusicPlayer.propTypes = {
    videoId: React.PropTypes.string.isRequired,
    opts: React.PropTypes.object
};

export default YoutubeMusicPlayer;
