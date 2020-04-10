import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions'
import Swal from 'sweetalert2'
import request from '../api'

function* signUpProfile(action) {
    try {
        const { firstName, lastName, email, password } = action.payload.data
        let data = yield call(request, '/functions/userSignup', { firstName, lastName, email, password })
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Sign-in success!'
        })
        yield put({ type: SIGN_UP_SUCCESS, payload: data.result })
    }
    catch (err) {
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Error "+err.code+": "+err.error
        })
        yield put({ type: SIGN_UP_FAILURE, payload: {err} });
    }
}

export default function* watchSignUpProfile() {
    yield takeLatest(SIGN_UP, signUpProfile)
}