import ActionNames from '../actions/ActionNames.js';

const controls = (state, action) => {
    switch(action.type) {
        case ActionNames.SET_PLAY_CURRENT:
            return Object.assign({}, state, {
                isPlaying: action.isPlaying
            });

        case ActionNames.PLAY_NEXT: {
            let curSong = state.playlist[0];
            let newPlaylist = state.playlist.slice(1);
            newPlaylist = newPlaylist.concat(curSong);                   
            return Object.assign({}, state, {
                playlist: newPlaylist
            });
        }

        case ActionNames.PLAY_PREV: {
            let playlist = state.playlist;
            let lastIndex = playlist.length - 1;
            let nextSong = playlist[lastIndex];
            let newPlaylist = playlist.slice(0, lastIndex);
            newPlaylist.unshift(nextSong);
            return Object.assign({}, state, {
                playlist: newPlaylist
            });
        }

        default:
            return state;
    }
}

export default controls;