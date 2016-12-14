import React from 'react';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import MusicControls from './MusicControls.jsx';

class YoutubeMusic extends React.Component {

    render() {
        return (
            <div>
                <YoutubeMusicPlayer
                    videoId='pcKR0LPwoYs' />
                <MusicControls />
            </div>
        );
    }
}

export default YoutubeMusic;
