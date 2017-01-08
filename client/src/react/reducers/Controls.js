import ActionNames from '../actions/ActionNames.js';

const initialPlaylistSettings = {
    currentIndex: 0,
    queuedMusic: [],
    isShuffled: false
}

// Fisher-Yates shuffle
function shuffle(arr) {
    let m = arr.length;
    let i, temp;

    while (m) {
        i = Math.floor(Math.random() * m--);
        temp = arr[m];
        arr[m] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

export const isPlaying = (state = false, action) => {
    switch(action.type) {

        case ActionNames.SET_PLAY_CURRENT: {
            return action.isPlaying;
        }

        default:
            return state;
    }
};

export const playlistSettings = (state = initialPlaylistSettings, action) => {
    switch(action.type) {

        case ActionNames.SET_QUEUED_MUSIC: {
            return Object.assign({}, state, {
                queuedMusic: action.music
            });
        }

        case ActionNames.PLAY_NEXT: {
            let index = (state.currentIndex + 1) % state.queuedMusic.length
            return Object.assign({}, state, {
                currentIndex: index
            });
        }

        case ActionNames.PLAY_PREV: {
            let index = state.currentIndex - 1;
            if (index === -1) {
                index = state.queuedMusic.length - 1;
            }
            return Object.assign({}, state, {
                currentIndex: index
            });
        }

        case ActionNames.ADD_NEW_SONG: {
            return Object.assign({}, state, {
                queuedMusic: state.queuedMusic.concat(action.song)
            });
        }

        case ActionNames.SHUFFLE_SONGS: {
            let playlistSettings = {
                currentIndex: 0,
                isShuffled: !state.isShuffled
            };

            if (state.isShuffled) {
                playlistSettings.queuedMusic = action.music;
            } else {
                playlistSettings.queuedMusic = shuffle(state.queuedMusic.slice());
            }
            return playlistSettings;
        }

        default:
            return state;
    }
};