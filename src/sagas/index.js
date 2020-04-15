import {all} from 'redux-saga/effects'
import watchSignUpProfile from './signUpProfile'
import watchSignInProfile from './signInProfile'

export default function* rootSaga(){ 
    yield all([
        watchSignUpProfile(),
        watchSignInProfile()
    ]) 
}