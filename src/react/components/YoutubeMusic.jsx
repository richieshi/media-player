import React from 'react';
import Youtube from 'react-youtube';

class YoutubeMusic extends React.Component {

    _onReady(event) {
        event.target.playVideo();
    }

    render() {
        let {videoId, opts} = this.props;

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

YoutubeMusic.propTypes = {
    videoId: React.PropTypes.string.isRequired,
    opts: React.PropTypes.object
};

export default YoutubeMusic;