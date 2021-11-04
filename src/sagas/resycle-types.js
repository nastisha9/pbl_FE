import {all, call, put, takeLatest} from 'redux-saga/effects';
import {GET_RESYCLE_TYPES_START, ADD_RESYCLE_TYPE_START} from '../actions/types';
import {getResycleTypesSuccess, getResycleTypesError, getResycleTypesRequest} from '../actions/map';

import APIPath, {APIGetResyleTypes, APICreateResyleTypes} from '../mocks/resycle-types';

function* fetchResyleTypesStart() {
  try {
    const {resycleTypes} = yield call(APIGetResyleTypes, {url: `${APIPath}/all`});
    yield put(getResycleTypesSuccess(resycleTypes));
  } catch (err) {
    yield put(getResycleTypesError(err));
  }
}

function* fetchCreateResyleType({payload}) {
  try {
    yield call(APICreateResyleTypes, {
      url: `${APIPath}/create`,
      body: payload,
    });

    yield put(getResycleTypesRequest());

  } catch (err) {
    console.error(err);
  }
}


export default function* saga() {
  yield all([
    takeLatest(GET_RESYCLE_TYPES_START, fetchResyleTypesStart),
    takeLatest(ADD_RESYCLE_TYPE_START, fetchCreateResyleType),
  ]);
}
