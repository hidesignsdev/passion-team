import {call, put, takeLatest} from 'redux-saga/effects'
import {SIGN_UP, SIGN_UP_SUCCESS} from '../actions'
import axios from 'axios'
import {appHeader} from '../appHeader'

const signUpRequest = ({ firstName, lastName, email, password }) => {
    return axios.request({
        method: 'POST',
        headers: appHeader,
        url: 'https://api.korec-dev.scrum-dev.com/api/functions/userSignup',
        data: {
            firstName, lastName, email, password
        }
    })
}

function* signUpProfile(action){
    try {
        let data = yield call(signUpRequest, action.payload.data)
        yield put({type: SIGN_UP_SUCCESS, payload: data.data.result})
    }
    catch(err){
        console.log(err)
    }
}

export default function* watchSignUpProfile(){
    yield takeLatest(SIGN_UP, signUpProfile)
}