import initialState from '../states/initial';

export default function(state = initialState, action) {
    switch (action.type) {
        case 'METHOD_RATE': return ;
        default: return state;
    }
}