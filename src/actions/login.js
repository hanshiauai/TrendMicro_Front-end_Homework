import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CANCEL} from "../constants/action-types.js";

export function loginRequest({username, password, callback}) {
    return {
        type: LOGIN_REQUEST,
        username,
        password,
        callback
    }
}

export function loginSucess(response) {
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error
    }
}

export function loginCancel() {
    return {
        type: LOGIN_CANCEL
    }
}