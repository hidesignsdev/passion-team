import {call, put, takeEvery} from 'redux-saga/effects'

import {REQUESTING_DATA} from '../actions'
import {REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE } from '../actions'

const fetchUserFromAPI = async (URL) =>{
    try {
        let response = await fetch(URL)
        let data = response.json()
        return data
    }
    catch(error){
        return error
    }
}

function* fetchData(action){
    try {
        let data = yield call(fetchUserFromAPI, action.payload.url)
        if(data.message === "Not Found") throw new Error("Whoops!")
        yield put({type: REQUEST_DATA_SUCCESS, payload: {data}})
    }
    catch(err){
        yield put({type: REQUEST_DATA_FAILURE})
    }
}

export default function* watchFetchData(){ 
    yield takeEvery(REQUESTING_DATA, fetchData) 
}