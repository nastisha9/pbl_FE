import {all, call, put, takeLatest} from 'redux-saga/effects';
import {GET_RESYCLE_TYPES_LIST_START} from '../actions/types';
import {getResycleTypesListSuccess, getResycleTypesListError} from '../actions/map';

import APIPath, {APIGetResyleTypesList} from '../mocks/resycle-types-list'

function* fetchResyleTypesListStart() {
  try {
    const {resycleTypesList} = yield call(APIGetResyleTypesList, {url: `${APIPath}/all`});
    yield put(getResycleTypesListSuccess(resycleTypesList));
  } catch (err) {
    yield put(getResycleTypesListError(err));
  }
}

export default function* saga() {
  yield all([
    takeLatest(GET_RESYCLE_TYPES_LIST_START, fetchResyleTypesListStart),
  ]);
}
