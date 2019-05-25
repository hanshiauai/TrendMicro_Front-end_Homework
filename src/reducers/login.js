import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CANCEL } from "../constants/action-types.js";
import { data } from "../constants/models.js";

export default function login(state = data, action) {

    // console.log(`In reducer action.type : ${ action.type }`);

    switch (action.type) {
        case LOGIN_REQUEST:
            state = {
                status: 'loading'
            };
            break;
        case LOGIN_SUCCESS:
            state = {
                status: 'logined',
                username: action.response.username,
                token: action.response.token
            };
            break;
        case LOGIN_ERROR:
            state = {
                status: 'error',
                error: action.error
            };
            break;
        case LOGIN_CANCEL:
            state = {
                status: 'init'
            };
            break;
        default:

    }

    return state;
}