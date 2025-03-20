import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Space,
  Table,
} from 'antd';
import { ImageDto, PhilosophyDto } from '../../../types/Dto';
import { HTTP_OK } from '../../../constants/common';
import { useTheme } from '../../contexts/theme-context';
import { PhilosoPhyApi } from '../../../service/PhilosophyApi';

const ImageManager: React.FC = () => {
  const { theme } = useTheme();

  const [philosophies, setPhilosophies] = useState<PhilosophyDto[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm<PhilosophyDto>();
  const [loading, setLoading] = useState(false);

  const fetchPhilosophies = useCallback(async () => {
    try {
      const res = await PhilosoPhyApi.get();
      if (res.statusCode === HTTP_OK) {
        setPhilosophies(res.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPhilosophies();
  }, [fetchPhilosophies]);

  const deletePhilosophy = useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        const res = await PhilosoPhyApi.delete(id);
        if (res.statusCode === HTTP_OK) {
          message.success('Delete philosophy success!');
          fetchPhilosophies();
        } else {
          message.error(res.message);
        }
      } catch (err) {
        console.error('Error deleting philosophy:', err);
      } finally {
        setLoading(false);
      }
    },
    [fetchPhilosophies]
  );

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const formValue = await form.validateFields();

      const res = await PhilosoPhyApi.create(formValue);
      if (res.statusCode === HTTP_OK) {
        message.success(res.message);
        form.resetFields();
        setModalVisible(false);
        fetchPhilosophies();
      } else {
        message.error(res.message);
      }
    } finally {
      setLoading(false);
    }
  }, [form, fetchPhilosophies]);

  const onCancel = useCallback(() => {
    form.resetFields();
    setModalVisible(false);
  }, [form]);

  const columns = [
    {
      title: 'Content',
      dataIndex: 'content',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Action',
      render: (record: ImageDto) => (
        <Space>
          <Button
            onClick={() => {
              form.setFieldsValue(record);
              setModalVisible(true);
            }}
            className={`
              custom-button
              ${theme === 'dark' ? 'custom-button-dark' : 'custom-button-light'}
            `}
          >
            Update
          </Button>
          <Popconfirm
            title="Confirm delete?"
            onConfirm={() => deletePhilosophy(record.id)}
          >
            <Button
              danger
              className={`
                custom-button
                ${theme === 'dark' ? 'custom-button-danger-dark' : 'custom-button-danger-light'}
              `}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div
      className={`
        min-h-screen p-4 transition-colors duration-300
        ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
      `}
    >
      <Card
        title="PHILOSOPHY MANAGER"
        extra={
          <Button
            onClick={() => setModalVisible(true)}
            className={`
              custom-button
              ${theme === 'dark' ? 'custom-button-dark' : 'custom-button-light'}
            `}
          >
            ADD PHILOSOPHY
          </Button>
        }
        className={`
          transition-colors duration-300
          ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}
        `}
      >
        <Table
          dataSource={philosophies}
          rowKey="id"
          columns={columns}
          pagination={false}
          className={theme === 'dark' ? 'dark-table' : ''}
        />
      </Card>

      <Modal
        title={form.getFieldValue('id') ? 'Update Philosohy' : 'Add Philosohy'}
        open={isModalVisible}
        onOk={onSubmit}
        onCancel={onCancel}
        okText={form.getFieldValue('id') ? 'Update' : 'Add'}
        cancelText="Cancel"
        confirmLoading={loading}
        className={theme === 'dark' ? 'dark-modal' : ''}
        footer={[
          <Button
            key="cancel"
            onClick={onCancel}
            className={`
              custom-button
              ${theme === 'dark' ? 'custom-button-light' : 'custom-button-dark'}
            `}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={onSubmit}
            className={`
              custom-button
              ${theme === 'dark' ? 'custom-button-dark' : 'custom-button-light'}
            `}
          >
            {form.getFieldValue('id') ? 'Update' : 'Add'}
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item hidden name="id" />
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please enter content!' }]}
          >
            <Input
              placeholder="Enter content"
              className={theme === 'dark' ? 'bg-gray-800 text-white' : ''}
            />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input
              placeholder="Enter author"
              className={theme === 'dark' ? 'bg-gray-800 text-white' : ''}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ImageManager;
