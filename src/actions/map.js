import {createAction} from 'redux-actions';
import {
  GET_MARKERS_START,
  GET_MARKERS_SUCCESS,
  GET_MARKERS_ERROR,
  ADD_MARKER_START,
  ADD_MARKER_SUCCESS,
  ADD_MARKER_ERROR,
  GET_RESYCLE_TYPES_START,
  GET_RESYCLE_TYPES_SUCCESS,
  GET_RESYCLE_TYPES_ERROR,
  GET_RESYCLE_TYPES_LIST_START,
  GET_RESYCLE_TYPES_LIST_SUCCESS,
  GET_RESYCLE_TYPES_LIST_ERROR,
  ADD_RESYCLE_TYPE_START,
  ADD_RESYCLE_TYPE_SUCCESS,
  ADD_RESYCLE_TYPE_ERROR
} from './types';

export const getMarkersRequest = createAction(GET_MARKERS_START);
export const getMarkersRequestSucess = createAction(GET_MARKERS_SUCCESS);
export const getMarkersRequestError = createAction(GET_MARKERS_ERROR);

export const createMarkerRequest = createAction(ADD_MARKER_START);
export const createMarkerSuccess = createAction(ADD_MARKER_SUCCESS);
export const createMarkerError = createAction(ADD_MARKER_ERROR);

export const getResycleTypesRequest = createAction(GET_RESYCLE_TYPES_START);
export const getResycleTypesSuccess = createAction(GET_RESYCLE_TYPES_SUCCESS);
export const getResycleTypesError = createAction(GET_RESYCLE_TYPES_ERROR);

export const createResycleTypeRequest = createAction(ADD_RESYCLE_TYPE_START);
export const createResycleTypeSuccess = createAction(ADD_RESYCLE_TYPE_SUCCESS);
export const createResycleTypeError = createAction(ADD_RESYCLE_TYPE_ERROR);

export const getResycleTypesListRequest = createAction(GET_RESYCLE_TYPES_LIST_START);
export const getResycleTypesListSuccess = createAction(GET_RESYCLE_TYPES_LIST_SUCCESS);
export const getResycleTypesListError = createAction(GET_RESYCLE_TYPES_LIST_ERROR);
