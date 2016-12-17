import ActionNames from './ActionNames.js';

export default {
    setPlayCurrentSong: ( isPlaying ) => {
        return {
            type: ActionNames.SET_PLAY_CURRENT,
            isPlaying: isPlaying
        }
    },

    playNext: () => {
        return {
            type: ActionNames.PLAY_NEXT
        }
    },

    playPrev: () => {
        return {
            type: ActionNames.PLAY_PREV
        }
    }
};