import React from 'react';
import YoutubeMusic from './YoutubeMusic.jsx';
import MusicControls from './MusicControls.jsx';
import Actions from '../actions/Actions.js';
import { connect } from 'react-redux';
import jquery from 'jquery';

class App extends React.Component {

    componentDidMount() {
        this.props.init();
    }

    componentWillUpdate(nextProps, nextState) {
        let { playlist } = nextProps;
        if (playlist.isFetching !== this.props.playlist.isFetching) {
            this.props.setQueuedMusic(playlist.music);
        }
    }

    render() {
        if (this.props.playlist.isFetching) {
            return null;
        }
        return (
            <div id='main-app'>
                <div className='playlist'>
                    <YoutubeMusic />
                </div>
                <div className='controls-container'>
                    <MusicControls />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playlist: state.playlist
   };
};

const mapDispatchToStore = (dispatch) => {
    return {
        init: () => {
            jquery.get('http://localhost:5000/playlist/1/1')
                .then((res) => {
                    console.log('a');
                    dispatch(Actions.init({
                        isFetching: false,
                        music: res.playlist
                    }));
                });
        },

        setQueuedMusic: (music) => {
            dispatch(Actions.setQueuedMusic(music));
        }
    };
}

App = connect(mapStateToProps, mapDispatchToStore)(App);

export default App;
