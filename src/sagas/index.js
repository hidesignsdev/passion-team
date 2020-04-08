import {all} from 'redux-saga/effects'
import watchSignUpProfile from './signUpProfile'

export default function* rootSaga(){ 
    yield all([
        watchSignUpProfile()
    ]) 
}