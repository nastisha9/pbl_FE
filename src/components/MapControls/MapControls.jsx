import React from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Button } from 'antd';
import { EnvironmentFilled, SearchOutlined } from '@ant-design/icons';

import { CheckboxIcon } from '../../elements';

const MapControls = ({ ...props}) => {
  const { onChange } = props;
  return (
    <div className="map-conttrolls">
      <div className="map-conttrolls--container">
        <CheckboxIcon onChange={onChange} icon={<EnvironmentFilled />}/>
        <label className="map-conttrolls--search">
          <SearchOutlined />
          <Geocoder {...props} placeholder="Searh Location..." />
        </label>
      </div>
    </div>
  )
}

export default MapControls;
