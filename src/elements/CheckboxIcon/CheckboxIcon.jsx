import React, { useState } from 'react';
import classnames from 'classnames';

const CheckboxIcon = ({ icon: Icon, onChange }) => {
  const [value, toggleValue] = useState(false);

  const handleChange = (e) => {
    toggleValue(!value);
    onChange(!value);
  };

  return (
    <label className={classnames('checkbox-icon', {
      active: value,
    })}>
      <input type="checkbox" value={value} onChange={handleChange} />
      {Icon}
    </label>
  )
}

export default CheckboxIcon;
