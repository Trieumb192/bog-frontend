import React, { useState } from 'react';
import { createPost } from '../../../service/PostApi';

interface PostFormProps {
  onSuccess: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost({ title, content });
    setTitle('');
    setContent('');
    onSuccess(); 
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <h2 className="text-xl font-semibold mb-3">Thêm bài viết</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-3 py-2 w-full h-32 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Thêm bài viết
      </button>
    </form>
  );
};

export default PostForm;