import { call, put, takeLatest } from 'redux-saga/effects'
import { SIGN_UP, signUpSuccess, requestFailure } from '../actions'
import Swal from 'sweetalert2'
import request from '../api'

function* signUpProfile(action) {
    try {
        const { firstName, lastName, email, password } = action.payload.data
        let data = yield call(request, '/functions/userSignup', { firstName, lastName, email, password })
        yield put(signUpSuccess(data.result))
        console.log("Signup", data)
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Sign-up success!'
        })
    }
    catch (err) {
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Error "+err.code+": "+err.error
        })
        yield put(requestFailure(err));
    }
}

export default function* watchSignUpProfile() {
    yield takeLatest(SIGN_UP, signUpProfile)
}