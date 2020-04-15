import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_UP, REQUESTING_SUCCESS, REQUESTING_FAILURE } from '../actions'
import Swal from 'sweetalert2'
import request from '../api'

function* signUpProfile(action) {
    try {
        const { firstName, lastName, email, password } = action.payload.data
        let data = yield call(request, '/functions/userSignup', { firstName, lastName, email, password })
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

export default function* watchSignUpProfile() {
    yield takeLatest(SIGN_UP, signUpProfile)
}