import {prop, compose} from 'ramda';

const rootSelector = prop('map');
const getMarkers = compose(prop('markers'), rootSelector);
const getResycleTypes = compose(prop('resycleTypes'), rootSelector);
const getResycleTypesList = compose(prop('resycleTypesList'), rootSelector);

export {getMarkers, getResycleTypes, getResycleTypesList};
