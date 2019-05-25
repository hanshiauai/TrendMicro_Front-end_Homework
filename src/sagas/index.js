import { all } from 'redux-saga/effects';
import {watchRequestLogin} from "./login.js";

function* rootSaga() {
    yield all([
        watchRequestLogin()
    ]);
}

export default rootSaga;