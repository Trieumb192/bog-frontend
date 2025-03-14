import React, { useEffect, useState } from 'react';
import { Post } from '../../types/Post';
import { deletePost, getPosts } from '../../service/PostApi';

interface PostListProps {
  reload: boolean;
}

const PostList: React.FC<PostListProps> = ({ reload }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, [reload]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Danh sách bài viết</h2>
      {posts.map((post) => (
        <div key={post.id} className="border p-3 mb-2 rounded shadow-sm">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-gray-700">{post.content}</p>
          <div className="mt-2">
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white px-2 py-1 rounded mr-2"
            >
              Xoá
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
