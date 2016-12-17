import ActionNames from '../actions/ActionNames.js';

const controls = (state, action) => {
    switch(action.type) {
        case ActionNames.INIT: {
            return Object.assign({}, state, {
                isInit: true,
                playlist: ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0'],
                queuedMusic: ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0']
            });
        }

        case ActionNames.SET_PLAY_CURRENT: {
            return Object.assign({}, state, {
                isPlaying: action.isPlaying
            });
        }

        case ActionNames.PLAY_NEXT: {
            return Object.assign({}, state, {
                currentIndex: (state.currentIndex + 1) % state.playlist.length
            });
        }

        case ActionNames.PLAY_PREV: {
            let index = state.currentIndex - 1;
            if (index === -1) {
                index = state.playlist.length - 1;
            }
            return Object.assign({}, state, {
                currentIndex: index
            });
        }

        default:
            return state;
    }
}

export default controls;