import React from 'react';
import YoutubeMusicPlayer from './YoutubeMusicPlayer.jsx';
import MusicControlsContainer from './MusicControls.jsx';

class YoutubeMusic extends React.Component {

    render() {
        return (
            <div>
                <YoutubeMusicPlayer
                    videoId='R8_Ie1eHbxs' />
                <MusicControlsContainer />
            </div>
        );
    }
}

export default YoutubeMusic;
