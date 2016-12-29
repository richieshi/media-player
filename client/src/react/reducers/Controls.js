import ActionNames from '../actions/ActionNames.js';

const initialPlaylistSettings = {
    currentIndex: 0,
    queuedMusic: 
        ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0', 
        'dImPgtJq1_A', 'iIPH8LFYFRk', 'y3CSu20OSHI', 
        'GE_4RtpVVaw', 'acKYkaOYiWQ', 'yXAJIdyyZK4',
        '4s-xd9O5ZQg', 'UbHVxe6D-Nw'],
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
                queuedMusic: state.queuedMusic.concat(action.videoId)
            });
        }

        case ActionNames.SHUFFLE_SONGS: {
            let playlistSettings = { 
                currentIndex: 0,
                isShuffled: !state.isShuffled
            };

            if (state.isShuffled) {
                playlistSettings.queuedMusic = action.playlist;
            } else {
                playlistSettings.queuedMusic = shuffle(state.queuedMusic.slice());
            }
            return playlistSettings;
        }

        default:
            return state;
    }
};