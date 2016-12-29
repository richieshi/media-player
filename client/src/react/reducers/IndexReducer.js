import ActionNames from '../actions/ActionNames.js';

const indexReducer = (state, action) => {
    switch(action.type) {

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

export default indexReducer;