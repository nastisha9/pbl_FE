import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Form, Input, Button, Select} from 'antd';
import {SketchPicker} from 'react-color';

import { getResycleTypesListRequest, createResycleTypeRequest } from '../../actions/map';
import { getResycleTypesList } from '../../selectors/map';

import { MarkerPin } from '../../elements';

const {Option} = Select;

const gelerateId = (str) => {
  const parsedStr = str.trim().toLowerCase().split(' ');

  return !parsedStr.length ? parsedStr : parsedStr.join('_');
}

const MarkerTypeForm = () => {
  const [form] = Form.useForm();
  const[color, setColor] = useState('');
  const dispatch = useDispatch();
  const { items: resycleTypeList } = useSelector(getResycleTypesList);

  useEffect(() => {
    dispatch(getResycleTypesListRequest());
  }, []);

  console.log(resycleTypeList);

  const onFinish = (values) => {
    dispatch(createResycleTypeRequest({
      ...values,
      id: gelerateId(values.label),
      description: '',
      'marker_color':  values['marker_color'].hex
    }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onColorChange = (color) => {
    setColor(color);
    form.setFieldsValue(color.hex);
  }

  return (
    <div className="create-marker-type-form">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="create-marker-type-form--pin-container">
          <MarkerPin color={color.hex} />
        </div>
        <Form.Item
          label="Label"
          name="label"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input placeholder="LabelName" />
        </Form.Item>
        <Form.Item
          label="Color"
          name="marker_color"
        >
          <SketchPicker color={color} onChangeComplete={onColorChange} />
        </Form.Item>
        <Form.Item
          label="Resyle types"
          name="types"
          rules={[{ required: true, message: 'Please select type' }]}
        >
          <Select placeholder="Select resycle type" mode="multiple" onChange={form.setFieldsValue}>
            {resycleTypeList.map(({ id, type: value }) => <Option key={value}>{value}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default MarkerTypeForm;
