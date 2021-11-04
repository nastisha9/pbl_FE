import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import MarkerTypeForm from './MarkerTypeForm';

const CreateMarkerType = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" icon={<PlusOutlined />} onClick={showModal}>
        Add type
      </Button>
      <Modal title="Create Marker Type" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <MarkerTypeForm />
      </Modal>
    </>
  );
}

export default CreateMarkerType;
