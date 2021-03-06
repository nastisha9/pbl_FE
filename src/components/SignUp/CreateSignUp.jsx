import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


import SignUp from './SignUpForm';

const CreateSignUp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="default" ghost size="large" cName='nav-links' onClick={showModal}>
        Sign up
      </Button>
      <Modal title="Sign Up" visible={isModalVisible} footer={null} onCancel={handleCancel} >
        <SignUp />
      </Modal>
    </>
  );
}

export default CreateSignUp;
