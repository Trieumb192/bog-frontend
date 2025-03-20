import { useState } from 'react';
import { Input, Table, Modal, Form, message } from 'antd';

const AdminDashboard = () => {
  const [imageList, setImageList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [isArticleModalVisible, setArticleModalVisible] = useState(false);

  const [form] = Form.useForm();
  const [articleForm] = Form.useForm();

  const handleAddImage = () => {
      form.validateFields().then(values => {
          setImageList([]);
    console.log(values)
      message.success('Thêm ảnh thành công!');
      form.resetFields();
      setImageModalVisible(false);
    });
  };

  const handleAddArticle = () => {
      articleForm.validateFields().then(values => {
          setArticleList([]);
      console.log(values)
      message.success('Thêm bài viết thành công!');
      articleForm.resetFields();
      setArticleModalVisible(false);
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setImageModalVisible(true)}
            >
              Thêm Ảnh
            </button>
          </li>
          <li>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded"
              onClick={() => setArticleModalVisible(true)}
            >
              Thêm Bài Viết
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-4">Quản lý Ảnh</h1>
        <div className="grid grid-cols-4 gap-4 mb-12">
          {imageList.map((url, index) => (
            <div key={index} className="border rounded overflow-hidden">
              <img src={url} alt={`ảnh ${index + 1}`} className="w-full h-48 object-cover" />
              <div className="p-2 text-center">{url}</div>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-semibold mb-4">Quản lý Bài Viết</h1>
        <Table
          dataSource={articleList}
          rowKey="id"
          columns={[
            { title: 'Tiêu đề', dataIndex: 'title' },
            { title: 'Mô tả', dataIndex: 'description' },
          ]}
        />
      </div>

      {/* Modal thêm ảnh */}
      <Modal
        title="Thêm Ảnh"
        visible={isImageModalVisible}
        onOk={handleAddImage}
        onCancel={() => setImageModalVisible(false)}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="URL Ảnh"
            name="url"
            rules={[{ required: true, message: 'Vui lòng nhập URL ảnh!' }]}
          >
            <Input placeholder="Nhập URL ảnh" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal thêm bài viết */}
      <Modal
        title="Thêm Bài Viết"
        visible={isArticleModalVisible}
        onOk={handleAddArticle}
        onCancel={() => setArticleModalVisible(false)}
        okText="Thêm"
        cancelText="Hủy"
      >
        <Form form={articleForm} layout="vertical">
          <Form.Item
            label="Tiêu đề"
            name="title"
            rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
          >
            <Input placeholder="Tiêu đề bài viết" />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
          >
            <Input.TextArea rows={4} placeholder="Mô tả ngắn bài viết" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
