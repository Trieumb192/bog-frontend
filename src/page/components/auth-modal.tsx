import React, { useState } from 'react';
import { Modal, Tabs, Form, Input, message, Space } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { UserDto } from '../../types/User';
import { UserApi } from '../../service/UserApi';
import { HTTP_OK } from '../../constants/common';
import { useAuth } from '../contexts/auth-context';
import CustomButton from './common/custom-button';

const { TabPane } = Tabs;

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [form] = useForm<UserDto>();
  const { login, loginWithGoogle } = useAuth(); 

  const handleLogin = (request: UserDto) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success(`Wellcome ${request.fullName}!`);
      login(request);
      onClose();
    }, 1000);
  };

  const handleLoginWithGoogle = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loginWithGoogle();
      onClose();
    }, 1000);
  }

  const handleRegister = async(request: UserDto) => {
    try {
      setLoading(true);
      const result = await UserApi.create(request);
      if (result.statusCode === HTTP_OK) {
        message.success(result.message);
      } else {
        message.error(result.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    };
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
      className="rounded-lg overflow-hidden"
    >
      <Tabs defaultActiveKey="1" centered>
        {/* Login Tab */}
        <TabPane tab="LOGIN" key="1">
          <Form
            name="login"
            onFinish={handleLogin}
            layout="vertical"
            className="space-y-4"
            form={form}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Enter email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
            </Form.Item>
            <Space>
              <Form.Item>
                <CustomButton variant="primary" label="Login" type="submit" loading={loading}/>
              </Form.Item>
              <Form.Item>
                <CustomButton variant="primary" label="Login with google" loading={loading} onClick={() => handleLoginWithGoogle()}/>
              </Form.Item>
            </Space> 
          </Form>
        </TabPane>

        {/* Register Tab */}
        <TabPane tab="REGISTER" key="2">
          <Form
            name="register"
            onFinish={handleRegister}
            layout="vertical"
            className="space-y-4"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email', message: 'Please enter email!' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="fullName"
              label="FulName"
              rules={[{ required: true, message: 'Please enter fullname!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Fullname" />
            </Form.Item>
            <Form.Item>
              <CustomButton variant="primary" label="Register" type="submit" loading={loading}/>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default AuthModal;
