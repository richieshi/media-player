import React from 'react';
import YoutubeMusic from './YoutubeMusic.jsx';

class App extends React.Component {

    _onReady(event) {
        event.target.playVideo();
    }

    render() {
        const opts = {
            height: '100',
            width: '100',
            loop: 1
        };
        let player =
            <YoutubeMusic
                videoId='ulr0muQKjk0'
                opts={opts} />

        return player;
    }
}

export default App;