import React from 'react';
import { Form, Input, Button } from 'antd';

import ResycleTypeField from './ResycleTypeField';

const MarkerForm = ({ onSubmit, onCancel, marker }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
    onSubmit({ ...marker, ...values });
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item label="Search a point" name="adress_name">
          <Input placeholder="Please Enter Address" />
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
