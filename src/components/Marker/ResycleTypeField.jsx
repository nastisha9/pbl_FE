import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ChromePicker} from 'react-color';

import {getResycleTypesRequest} from '../../actions/map';
import {getResycleTypes} from '../../selectors/map';
import { MarkerPin } from '../../elements';

const ResycleTypeField = () => {
  const name = 'resycle-type';
  const dispatch = useDispatch();
  const { items: resycleTypes } = useSelector(getResycleTypes);

  const [color, setColor] = useState ('#fff');
  const [showColorPicker, setShowColorPicker] = useState (false);



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

      <button
      onClick = {() => setShowColorPicker (showColorPicker => !showColorPicker)}
      > 
        {showColorPicker ? 'Close color picker' : 'Pick a color'} 
      </button>
      {showColorPicker && (
        <ChromePicker
        color = {color}
        onChange = {updatedColor => setColor(updatedColor.hex) }
        />
      )}
      
    </div>
  );
}

export default ResycleTypeField;
