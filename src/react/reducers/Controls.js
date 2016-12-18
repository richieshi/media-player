import ActionNames from '../actions/ActionNames.js';

const initialPlaylistSettings = {
    currentIndex: 0,
    queuedMusic: ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0']
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

    console.log(arr);

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

        case ActionNames.PLAY_NEXT: {
            let index = (state.currentIndex + 1) % state.queuedMusic.length
            return {
                currentIndex: index,
                queuedMusic: state.queuedMusic
            };
        }

        case ActionNames.PLAY_PREV: {
            let index = state.currentIndex - 1;
            if (index === -1) {
                index = state.queuedMusic.length - 1;
            }
            return {
                currentIndex: index,
                queuedMusic: state.queuedMusic
            };
        }

        case ActionNames.ADD_NEW_SONG: {
            return {
                currentIndex: state.currentIndex,
                queuedMusic: state.queuedMusic.concat(action.videoId)
            }
        }

        case ActionNames.SHUFFLE_SONGS: {
            return {
                currentIndex: 0,
                queuedMusic: shuffle(state.queuedMusic.slice())
            };
        }

        default:
            return state;
    }
};