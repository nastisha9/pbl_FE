import {all, call, put, takeLatest} from 'redux-saga/effects';
import {GET_MARKERS_START, ADD_MARKER_START} from '../actions/types';
import {getMarkersRequest, getMarkersRequestSucess, getMarkersRequestError} from '../actions/map';

import APIPath, {APIGetMarkers, APICreateMarker, } from '../mocks/markers';

function* fetchMarkersStart() {
  try {
    const {markers} = yield call(APIGetMarkers, {url: `${APIPath}/all`});
    yield put(getMarkersRequestSucess(markers));
  } catch (err) {
    yield put(getMarkersRequestError(err));
  }
}

function* fetchCreateMarker({payload}) {
  try {
    yield call(APICreateMarker, {
      url: `${APIPath}/create`,
      body: payload,
    });

    yield put(getMarkersRequest());

  } catch (err) {
    console.error(err);
  }
}



export default function* saga() {
  yield all([
    takeLatest(GET_MARKERS_START, fetchMarkersStart),
    takeLatest(ADD_MARKER_START, fetchCreateMarker),
  ]);
}
