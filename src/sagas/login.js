import { takeEvery, call, put, fork, take, cancel } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_CANCEL } from "../constants/action-types.js";
import { loginAPI } from "../API";

export function* watchRequestLogin() {
    yield takeEvery(LOGIN_REQUEST, loginFlow)
}

export function* authorize({username, password, callback}){
    try {
        const response = yield call(loginAPI, {
            username,
            password
        })

        if( response.token ) {
            if( callback ) {
                callback();
            }
            yield put({
                type: LOGIN_SUCCESS,
                response
            })
        }
        else {
            yield put({
                type: LOGIN_ERROR,
                error: response
            })
        }
    } catch (error) {
        yield put({
            type: LOGIN_ERROR,
            error
        })
    }
}

export function* loginFlow(action) {
    const task = yield fork(authorize, {username: action.username, password: action.password, callback: action.callback})
    yield take(LOGIN_CANCEL)
    yield cancel(task)
}