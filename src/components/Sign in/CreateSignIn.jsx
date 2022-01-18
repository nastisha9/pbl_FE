import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import SignInForm from '../Sign in/SignInForm'

const CreateSignIn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        Sign In
      </Button>
      <Modal title="Sign In" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <SignInForm />
      </Modal>
    </>
  );
}

export default CreateSignIn;
