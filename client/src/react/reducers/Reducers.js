import { combineReducers } from 'redux';
import { isPlaying, playlistSettings } from './Controls.js';
import { playlist } from './DataReducers.js';

const Reducers = combineReducers({
    isPlaying,
    playlist,
    playlistSettings
});

export default Reducers;