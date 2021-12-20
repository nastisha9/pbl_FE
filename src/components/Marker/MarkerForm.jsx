import React from 'react';
import { Form, Input, Button } from 'antd';

import ResycleTypeField from './ResycleTypeField';

const MarkerForm = ({ onSubmit, onCancel, marker }) => {
  const [form] = Form.useForm();

  async function addMarker () {

    let fullMarker = {...marker, ...form.getFieldsValue()}
    console.warn(fullMarker);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(fullMarker),
  };
  const response = await fetch('http://localhost:3000/marker', requestOptions);
  const data = await response.json();
  }

  const handleSubmit = (values) => {
    console.log(values);
    console.log(form.getFieldsValue())
    addMarker();
    onSubmit({ ...marker, ...values });
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item label="Name" name="name">
          <Input placeholder="Please Enter Marker Name" />
        </Form.Item>
        <Form.Item label="Type" name='type'>
          <ResycleTypeField onChange={form.setFieldsValue} />
          {/* <Input placeholder="Please Enter Type" /> */}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
          {/* <Button onClick={onCancel}>Cancel</Button> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default MarkerForm;
