import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_IN, REQUESTING_SUCCESS, REQUESTING_FAILURE } from '../actions'
import Swal from 'sweetalert2'
import request from '../api'

function* signInProfile(action) {
    try {
        const { username, password } = action.payload.data
        let data = yield call(request, '/functions/login', { username, password })
        yield put({ type: REQUESTING_SUCCESS, payload: data.result })
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Sign-in success!'
        })
    }
    catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Error "+err.code+": "+err.error
        })
        console.log(err)
        yield put({ type: REQUESTING_FAILURE, payload: err });
    }
}

export default function* watchSignInProfile() {
    yield takeLatest(SIGN_IN, signInProfile)
}