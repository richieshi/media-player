import ActionNames from './ActionNames.js';

export default {
     setPlayCurrentSong: ( isPlaying ) => {
        return {
            type: ActionNames.SET_PLAY_CURRENT,
            isPlaying: isPlaying
        }
    }
};