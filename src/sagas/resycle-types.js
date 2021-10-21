import {all, call, put, takeLatest} from 'redux-saga/effects';
import {GET_RESYCLE_TYPES_START} from '../actions/types';
import {getResycleTypesSuccess, getResycleTypesError} from '../actions/map';

import APIPath, {APIGetResyleTypes } from '../mocks/resycle-types';

function* fetchResyleTypesStart() {
  try {
    const {resycleTypes} = yield call(APIGetResyleTypes, {url: `${APIPath}/all`});
    yield put(getResycleTypesSuccess(resycleTypes));
  } catch (err) {
    yield put(getResycleTypesError(err));
  }
}



export default function* saga() {
  yield all([
    takeLatest(GET_RESYCLE_TYPES_START, fetchResyleTypesStart),
  ]);
}
