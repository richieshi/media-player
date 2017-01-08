import ActionNames from '../actions/ActionNames.js'

export const playlist = (state = {isFetching: true, music:[]}, action) => {  
    switch(action.type) {
        case ActionNames.INIT: {
            return action.playlist;
            // return ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0', 
            //     'dImPgtJq1_A', 'iIPH8LFYFRk', 'y3CSu20OSHI', 
            //     'GE_4RtpVVaw', 'acKYkaOYiWQ', 'yXAJIdyyZK4',
            //     '4s-xd9O5ZQg', 'UbHVxe6D-Nw'];
        }

        case ActionNames.ADD_NEW_SONG: {
            return Object.assign({}, state, {
                music: state.music.concat(action.videoId)
            });
        }

        default:
            return state;
    }
}