import ActionNames from '../actions/ActionNames.js'

export const playlist = (state = {isFetching: true, music:[]}, action) => {  
    switch(action.type) {
        case ActionNames.INIT: {
            return action.playlist;
        }

        case ActionNames.ADD_NEW_SONG: {
            return Object.assign({}, state, {
                music: state.music.concat(action.song)
            });
        }

        default:
            return state;
    }
}