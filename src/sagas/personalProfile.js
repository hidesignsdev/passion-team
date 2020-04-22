import { call, put, takeLatest } from 'redux-saga/effects'
import { UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS,REQUESTING_FAILURE } from '../actions'
import moment from "moment"
import Swal from 'sweetalert2'
import request from '../api'

function* personalProfile(action) {
    try {
        let { gender, dateOfBirth, file } = action.payload
        const payload = new FormData()
        payload.set('type', 'AVATAR')
        payload.append('file', file)
        console.log('here goes the payload', payload)
        dateOfBirth = moment(dateOfBirth).format('YYYY/MM/DD')
        console.log('pass here')
        let img = yield call(request,'/upload/uploadImage', payload)
        console.log('but not here')
        let data = yield call(request, '/functions/updateProfileTesting', {gender, dateOfBirth, avatarId: img.objectId})
        console.log("Personal", data)
        yield put({ type: UPDATE_PROFILE_SUCCESS, payload: data.result })
    }
    catch (err) {
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Error "+err.code+": "+err.error
        })
        yield put({ type: REQUESTING_FAILURE, payload: err })
    }
}

export default function* watchPersonalProfile() {
    yield takeLatest(UPDATE_PROFILE, personalProfile)
}