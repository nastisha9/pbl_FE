import React from 'react';
import { Form, Input, Button } from 'antd';

const MarkerForm = ({ onSubmit, onCancel, marker }) => {
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit({ ...marker, ...form });
  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        onClick={e => e.stopPropagation()}
      >
        <Form.Item label="Name">
          <Input placeholder="Please Enter Address" />
        </Form.Item>
        <Form.Item label="Type">
          <Input placeholder="Please Enter Type" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>Submit</Button>
          {/* <Button onClick={onCancel}>Cancel</Button> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default MarkerForm;
