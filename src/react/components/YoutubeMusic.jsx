import React from 'react';
import { connect } from 'react-redux';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import MusicControls from './MusicControls.jsx';

class YoutubeMusic extends React.Component {

    render() {
        return (
            <div>
                <YoutubeMusicPlayer
                    videoId={this.props.playlist[0]} />
                <MusicControls />
            </div>
        );
    }
}

const mapPropsToStore = (state) => {
    return {
        playlist: state.playlist
    };
};

YoutubeMusic = connect(mapPropsToStore)(YoutubeMusic);

export default YoutubeMusic;
