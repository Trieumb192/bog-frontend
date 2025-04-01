import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useCallback } from 'react';
import JoditReact from 'jodit-react';
import { BlogDto } from '@/types/Dto';
import { BlogApi } from '@/service/BlogApi';
import { HTTP_OK } from '@/constants/common';

const BlogForm: React.FC = () => {
  const [form] = useForm<BlogDto>();

  const onSubmit = useCallback(async () => {
    const request = await form.validateFields();
    const res = await BlogApi.create(request);
    if (res.statusCode === HTTP_OK) {
      message.success("Lưu thành công!")
    } else {
      message.error("Error!");
    }
  }, [form]);

  return (
    <Form form={form}>
      <Form.Item
        name="title"
        label="Tiêu đề bài viết"
        labelAlign="left"
        labelCol={{ xs: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 } }}
        rules={[{ required: true, message: 'Hãy nhập tên tiêu đề' }]}
      >
        <Input placeholder={'Nhập tiêu đề bài viết'} />
      </Form.Item>
      <Form.Item
        name="content"
        label="Nội dung bài viết"
        labelAlign="left"
        labelCol={{ xs: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 } }}
      >
        <JoditReact />
      </Form.Item>
      <Form.Item>
        <Button onClick={onSubmit}>Lưu</Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;
