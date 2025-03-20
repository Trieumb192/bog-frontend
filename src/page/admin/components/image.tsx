import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Form, Input, message, Modal, Popconfirm, Space, Table } from 'antd';
import { ImageDto } from '../../../types/Dto';
import { ImageApi } from '../../../service/ImageApi';
import { HTTP_OK } from '../../../constants/common';
import { useTheme } from '../../contexts/theme-context';
import "../style.css";

const ImageManager: React.FC = () => {
  const { theme } = useTheme();

  const [images, setImages] = useState<ImageDto[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm<ImageDto>();
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      const res = await ImageApi.getImages();
      if (res.statusCode === HTTP_OK) {
        setImages(res.data || []);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const deleteImage = useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        const res = await ImageApi.delete(id);
        if (res.statusCode === HTTP_OK) {
          message.success('Delete image success!');
          fetchImages();
        } else {
          message.error(res.message);
        }
      } catch (err) {
        console.error('Error deleting images:', err);
      } finally {
        setLoading(false);
      }
    },
    [fetchImages]
  );

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const formValue = await form.validateFields();

      const res = await ImageApi.create(formValue);
      if (res.statusCode === HTTP_OK) {
        message.success(res.message);
        form.resetFields();
        setModalVisible(false);
        fetchImages();
      } else {
        message.error(res.message);
      }
    } finally {
      setLoading(false);
    }
  }, [form, fetchImages]);

  const onCancel = useCallback(() => {
    form.resetFields();
    setModalVisible(false);
  }, [form]);

  const columns = [
    {
      title: '',
      dataIndex: 'url',
      render: (url: string) => (
        <img
          src={url}
          alt="ảnh"
          className="rounded-md border border-gray-300 dark:border-gray-600 p-1 w-[100px] bg-white dark:bg-gray-700 shadow-sm"
        />
      ),
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
    },
    {
      title: 'Type',
      dataIndex: 'type',
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
          <Popconfirm title="Confirm delete?" onConfirm={() => deleteImage(record.id)}>
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
        ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}
      `}
    >
      <Card
        title="🖼️ IMAGE MANAGER"
        extra={
          <Button
            onClick={() => {
              form.resetFields();
              setModalVisible(true);
            }}
            className={`
              custom-button
              ${theme === 'dark' ? 'custom-button-dark' : 'custom-button-light'}
            `}
          >
            ➕ ADD IMAGE
          </Button>
        }
        className={`
          shadow-md transition-colors duration-300
          ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}
        `}
      >
        <Table
          dataSource={images}
          rowKey="id"
          columns={columns}
          pagination={false}
          className="table-hover-effect"
        />
      </Card>

      <Modal
        title={form.getFieldValue('id') ? '📝 Update Image' : '➕ Add Image'}
        open={isModalVisible}
        onOk={onSubmit}
        onCancel={onCancel}
        okText={form.getFieldValue('id') ? 'Update' : 'Add'}
        cancelText="Cancel"
        confirmLoading={loading}
        className={`custom-modal ${theme === 'dark' ? 'dark-modal' : ''}`}
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
            label="Image URL"
            name="url"
            rules={[{ required: true, message: 'Please enter image URL!' }]}
          >
            <Input
              placeholder="Enter image URL"
              className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}
            />
          </Form.Item>
          <Form.Item label="Tag Name" name="tag">
            <Input
              placeholder="Enter tag name"
              className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}
            />
          </Form.Item>
          <Form.Item label="Image Type" name="type">
            <Input
              placeholder="Enter image type"
              className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ImageManager;
