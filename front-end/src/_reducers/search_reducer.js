const result = function(state = {}, action) {
    switch (action.type) {
        case 'CHECK_KEYWORD':
            return { ...state, result: action.payload }
            break;
        default:
            console.log(action.type)
            return action;
    }
}

export default result;