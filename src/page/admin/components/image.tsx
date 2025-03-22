import React, { useCallback, useEffect, useState } from 'react';
import { Card, Form, Input, message, Modal, Space, Table, TableColumnProps } from 'antd';
import { ImageDto } from '../../../types/Dto';
import { ImageApi } from '../../../service/ImageApi';
import { DEFAULT_PAGE_SIZE, HTTP_OK, PAGE_SIZE_OPTION } from '../../../constants/common';
import { useTheme } from '../../contexts/theme-context';
import '../style.css';
import CustomButton from '@/page/components/common/custom-button';

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

  const columns: Array<TableColumnProps<ImageDto>> = [
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
      align: 'center',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      align: 'center',
    },
    {
      title: 'Action',
      align: 'center',
      render: (_v, record: ImageDto) => (
        <Space>
          <CustomButton
            variant="update"
            label="Update"
            confirm={false}
            onClick={() => {
              form.setFieldsValue(record);
              setModalVisible(true);
            }}
            loading={loading}
          />
          <CustomButton
            variant="delete"
            label="Delete"
            loading={loading}
            confirm
            onConfirm={() => deleteImage(record.id)}
            confirmCancelText="Cancel"
            confirmOkText="Delete"
            confirmTitle=""
            confirmMessage="Confirm delete?"
          />
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
        title={
          <div
            className={`text-lg font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            IMAGE MANAGER
          </div>
        }
        extra={
          <CustomButton
            variant="primary"
            label="Add Image"
            onClick={() => {
              form.resetFields();
              setModalVisible(true);
            }}
          />
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
          className="table-hover-effect"
          size="small"
          pagination={{
            defaultPageSize: DEFAULT_PAGE_SIZE,
            showSizeChanger: true,
            pageSizeOptions: PAGE_SIZE_OPTION,
            showTotal: (total, range) => (
              <div>{`${range[0]}-${range[1]} / Total record : ${total}`}</div>
            ),
          }}
        />
      </Card>

      <Modal
        title={
          <div
            className={`text-lg font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            {form.getFieldValue('id') ? 'Update Image' : 'Add Image'}
          </div>
        }
        closeIcon={false}
        open={isModalVisible}
        onOk={onSubmit}
        onCancel={onCancel}
        okText={form.getFieldValue('id') ? 'Update' : 'Add'}
        cancelText="Cancel"
        confirmLoading={loading}
        className={`custom-modal ${theme === 'dark' ? 'dark-modal' : 'light-modal'}`}
        footer={[
          <Space direction="horizontal" className="pt-4">
            <CustomButton variant="cancel" label="Cancel" onClick={() => onCancel()} />
            <CustomButton
              variant="secondary"
              label={form.getFieldValue('id') ? 'Update' : 'Add'}
              onClick={() => onSubmit()}
              loading={loading}
            />
          </Space>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          className={theme === 'dark' ? 'dark-form' : 'light-form'}
        >
          <Form.Item hidden name="id" />

          <Form.Item
            label="Image URL"
            name="url"
            rules={[{ required: true, message: 'Please enter image URL!' }]}
          >
            <Input placeholder="Enter image URL" />
          </Form.Item>

          <Form.Item label="Tag Name" name="tag">
            <Input placeholder="Enter tag name" />
          </Form.Item>

          <Form.Item label="Image Type" name="type">
            <Input placeholder="Enter image type" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ImageManager;
