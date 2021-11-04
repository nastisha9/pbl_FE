import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CreateMarkerType from '../MarkerType/CreateMarkerType';

import {getResycleTypesRequest} from '../../actions/map';
import {getResycleTypes} from '../../selectors/map';
import { MarkerPin } from '../../elements';

const ResycleTypeField = ({ onChange }) => {
  const name = 'resycle-type';
  const dispatch = useDispatch();
  const { items: resycleTypes } = useSelector(getResycleTypes);

  const [value, setValue] = useState('');
  useEffect(() => {
    dispatch(getResycleTypesRequest());
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(resycleTypes.find(({ id }) => id === e.target.value));
  }

  return (
    <div className="resycle-type-field">
      {resycleTypes.map(({id, marker_color, label}) => {
        return (
          <label>
              <input onChange={handleChange} checked={value === id} type="radio" name={name} value={id}/>
              <MarkerPin color={marker_color}>
                <span className="marker-pin--label">{label}</span>
              </MarkerPin>
          </label>
        )
      })}
      <CreateMarkerType />
    </div>
  );
}

export default ResycleTypeField;
