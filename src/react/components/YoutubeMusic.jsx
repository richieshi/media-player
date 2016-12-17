import React from 'react';
import { connect } from 'react-redux';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import MusicListItem from './MusicListItem.jsx';

class YoutubeMusic extends React.Component {

    render() {
        let { playlist, queuedMusic, currentIndex } = this.props;
        let playlistItems = playlist.map( ( song, i) => {
            let isPlaying = (i == currentIndex);
            return (
                <MusicListItem
                    key={i}
                    title={song}
                    isPlaying={isPlaying} />
            );
        });

        return (
            <div className='youtube-music'>
                {playlistItems}
                <YoutubeMusicPlayer
                    videoId={queuedMusic[currentIndex]} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playlist: state.playlist,
        queuedMusic: state.queuedMusic,
        currentIndex: state.currentIndex
    };
};

YoutubeMusic = connect(mapStateToProps)(YoutubeMusic);

export default YoutubeMusic;
