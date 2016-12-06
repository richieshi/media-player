import ActionNames from '../actions/ActionNames.js';

const controls = (state, action) => {
    switch(action.type) {
        case ActionNames.SET_PLAY_CURRENT:
            return Object.assign({}, state, {
                isPlaying: action.isPlaying
            });
        default:
            return state;
    }
}

export default controls;