import { combineReducers } from 'redux';
import { isPlaying, playlistSettings } from './Controls.js';
import { isInit, playlist } from './DataReducers.js';

const Reducers = combineReducers({
    isPlaying,
    isInit,
    playlist,
    playlistSettings
});

export default Reducers;