import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getResycleTypesRequest} from '../../actions/map';
import {getResycleTypes} from '../../selectors/map';
import { MarkerPin } from '../../elements';

const ResycleTypeField = () => {
  const name = 'resycle-type';
  const dispatch = useDispatch();
  const { items: resycleTypes } = useSelector(getResycleTypes);

  useEffect(() => {
    dispatch(getResycleTypesRequest());
  }, []);

  console.log(resycleTypes);

  return (
    <div className="resycle-type-field">
      {resycleTypes.map(({id, marker_color, label}) => {
        return (
          <label>
              <input type="radio" name={name} value={id}/>
              <MarkerPin color={marker_color}>
                <span className="marker-pin--label">{label}</span>
              </MarkerPin>
          </label>
        )
      })}
    </div>
  );
}

export default ResycleTypeField;
