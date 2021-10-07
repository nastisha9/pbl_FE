import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'antd';


const LinkButton = (props) => {
  const { children, to } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  }

  return (
    <Button type="link" onClick={handleClick}>{children}</Button>
  )
}


export default LinkButton;
