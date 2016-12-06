import ActionNames from './ActionNames.js';

export const setPlayCurrentSong = ( isPlaying ) => {
    return {
        type: ActionNames.SET_PLAY_CURRENT,
        isPlaying: isPlaying
    }
}