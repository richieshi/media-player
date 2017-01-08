import ActionNames from './ActionNames.js';

export default {
    init: (playlist) => {
        return {
            type: ActionNames.INIT,
            playlist: playlist
        }
    },

    setQueuedMusic: (music) => {
        return {
            type: ActionNames.SET_QUEUED_MUSIC,
            music: music
        }
    },

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
    },

    addNewSong: (videoId) => {
        return {
            type: ActionNames.ADD_NEW_SONG,
            videoId: videoId
        }
    },

    shuffleSongs: (music) => {
        return {
            type: ActionNames.SHUFFLE_SONGS,
            music: music
        }
    }
};