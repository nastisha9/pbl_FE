import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';
import {
  GET_MARKERS_START,
  GET_MARKERS_SUCCESS,
  GET_MARKERS_ERROR,
  GET_RESYCLE_TYPES_START,
  GET_RESYCLE_TYPES_SUCCESS,
  GET_RESYCLE_TYPES_ERROR,
  GET_RESYCLE_TYPES_LIST_START,
  GET_RESYCLE_TYPES_LIST_SUCCESS,
  GET_RESYCLE_TYPES_LIST_ERROR
} from '../actions/types';

const markers = handleActions(
  {
    [GET_MARKERS_START]: state => ({...state, isFetched: false}),
    [GET_MARKERS_SUCCESS]: (state, {payload}) => ({...state, isFetched: true, items: payload}),
    [GET_MARKERS_ERROR]: state => ({...state, isFetched: true}),
  },
  {isFetched: false, items: []},
);

const resycleTypes = handleActions(
  {
    [GET_RESYCLE_TYPES_START]: state => ({...state, isFetched: false}),
    [GET_RESYCLE_TYPES_SUCCESS]: (state, {payload}) => ({...state, isFetched: true, items: payload}),
    [GET_RESYCLE_TYPES_ERROR]: state => ({...state, isFetched: true}),
  },
  {isFetched: false, items: []},
);

const resycleTypesList = handleActions(
  {
    [GET_RESYCLE_TYPES_LIST_START]: state => ({...state, isFetched: false}),
    [GET_RESYCLE_TYPES_LIST_SUCCESS]: (state, {payload}) => ({...state, isFetched: true, items: payload}),
    [GET_RESYCLE_TYPES_LIST_ERROR]: state => ({...state, isFetched: true}),
  },
  {isFetched: false, items: []},
);

export const map = combineReducers({ markers, resycleTypes, resycleTypesList });

