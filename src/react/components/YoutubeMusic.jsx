import React from 'react';
import { connect } from 'react-redux';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import MusicListItem from './MusicListItem.jsx';
import AddContainer from './AddContainer.jsx';

class YoutubeMusic extends React.Component {

    render() {
        const { playlist, playlistSettings } = this.props;
        const { currentIndex, queuedMusic } = playlistSettings;
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
                <AddContainer />
                <YoutubeMusicPlayer
                    videoId={queuedMusic[currentIndex]} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playlist: state.playlist,
        playlistSettings: state.playlistSettings
    };
};

YoutubeMusic = connect(mapStateToProps)(YoutubeMusic);

export default YoutubeMusic;
