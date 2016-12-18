import ActionNames from '../actions/ActionNames.js';

export const isInit = (state = {}, action) => {
    switch(action.type) {
        case ActionNames.INIT: {
            return {
                isInit: true
            };
        }

        default:
            return state;
    }
}

export const playlist = (state = [], action) => {  
    switch(action.type) {
        case ActionNames.INIT: {
            return ['pcKR0LPwoYs', '--zku6TB5NY', 'RwFi7wnH5W0', 
                'dImPgtJq1_A', 'iIPH8LFYFRk', 'y3CSu20OSHI', 
                'GE_4RtpVVaw', 'acKYkaOYiWQ', 'yXAJIdyyZK4',
                '4s-xd9O5ZQg', 'UbHVxe6D-Nw'];
        }

        case ActionNames.ADD_NEW_SONG: {
            return state.concat(action.videoId);
        }

        default:
            return state;
    }
}