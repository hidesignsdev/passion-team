import {call, put, takeEvery} from 'redux-saga/effects'

import {REQUESTING_DATA} from '../actions'
import {requestDataSuccess, requestDataFailure } from '../actions'

async function fetchUserFromAPI(URL){
    let response = await fetch(URL);
    let data = await response.json()
    return data
}

function* fetchData(action){
    try {
        const data = yield call(fetchUserFromAPI, action.payload.url) 
        console.log(data) 
        yield put(requestDataSuccess(data))
    }
    catch(err){
        console.log(err)
    }
}

export default function* watchFetchData(){ 
    yield takeEvery(REQUESTING_DATA, fetchData) 
}