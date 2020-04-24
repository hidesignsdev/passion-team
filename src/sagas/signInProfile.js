import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_IN, signInSuccess, requestFailure } from '../actions'
import Swal from 'sweetalert2'
import request from '../api'

function* signInProfile(action) {
    try {
        const { username, password } = action.payload.data
        let data = yield call(request, '/functions/login', { username, password })
        console.log('Login',data)
        yield put(signInSuccess(data.result))
        localStorage.setItem('token',data.result.sessionToken)
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
        yield put(requestFailure(err));
    }
}

export default function* watchSignInProfile() {
    yield takeLatest(SIGN_IN, signInProfile)
}