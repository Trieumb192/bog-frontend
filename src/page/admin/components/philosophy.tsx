import React, { useCallback, useEffect, useState } from 'react';
import { Card, Form, Input, message, Modal, Space } from 'antd';
import ProTable, {ProColumns} from "@ant-design/pro-table";
import { PhilosophyDto } from '../../../types/Dto';
import { HTTP_OK } from '../../../constants/common';
import { useTheme } from '../../contexts/theme-context';
import { PhilosoPhyApi } from '../../../service/PhilosophyApi';
import CustomButton from '@/page/components/common/custom-button';

const PhilosophyManager: React.FC = () => {
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

  const columns: Array<ProColumns<PhilosophyDto>> = [
    {
      title: 'Content',
      dataIndex: 'content',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      align: "center",
    },
    {
      title: 'Action',
      align: "center",
      render: (_v, record: PhilosophyDto) => (
        <Space>
          <CustomButton
            variant="update"
            label="Update"
            onClick={() => {
              form.setFieldsValue(record);
              setModalVisible(true);
            }}
            loading={loading}
          />
          <CustomButton
            variant="delete"
            label="Delete"
            confirm
            loading={loading}
            onConfirm={() => deletePhilosophy(record.id)}
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
        ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}
      `}
    >
      <Card
        title={
          <div
            className={`text-lg font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            PHILOSOPHY MANAGER
          </div>
        }
        extra={
          <CustomButton
            variant="primary"
            label="Add Philosophy"
            onClick={() => {
              form.resetFields();
              setModalVisible(true);
            }}
          />
        }
        className={`
          transition-colors duration-300
          ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}
        `}
      >
        <ProTable
          dataSource={philosophies}
          rowKey="id"
          columns={columns}
          pagination={false}
          className={theme === 'dark' ? 'dark-table' : ''}
        />
      </Card>

      <Modal
        title={
          <div
            className={`text-lg font-semibold transition-colors duration-300 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            {form.getFieldValue('id') ? 'Update Philosophy' : 'Add Philosophy'}
          </div>
        }
        open={isModalVisible}
        onOk={onSubmit}
        onCancel={onCancel}
        okText={form.getFieldValue('id') ? 'Update' : 'Add'}
        cancelText="Cancel"
        confirmLoading={loading}
        className={theme === 'dark' ? 'dark-modal' : 'light-modal'}
        footer={[
          <Space direction="horizontal" className="pt-4">
            <CustomButton variant="cancel" label="Cancel" onClick={() => onCancel()} />
            <CustomButton
              variant="secondary"
              label={form.getFieldValue('id') ? 'Update' : 'Add'}
              onClick={() => onSubmit}
              loading={loading}
            />
          </Space>,
        ]}
      >
        <Form form={form} layout="vertical" className={theme === 'dark' ? 'dark-form' : 'light-form'}>
          <Form.Item hidden name="id" />
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please enter content!' }]}
          >
            <Input
              placeholder="Enter content" 
            />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input
              placeholder="Enter author"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PhilosophyManager;
