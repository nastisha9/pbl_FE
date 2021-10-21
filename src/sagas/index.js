import {all, fork} from 'redux-saga/effects';

import map from './map';
import resycleTypes from './resycle-types';
export default function* root() {
  yield all([fork(map), fork(resycleTypes)]);
}
