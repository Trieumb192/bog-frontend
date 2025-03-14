import React, { useState } from 'react';
import PostForm from './page/post/component/form';
import PostList from './page/post';

const App: React.FC = () => {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog cá nhân 🚀</h1>
      <PostForm onSuccess={handleReload} />
      <PostList reload={reload} />
    </div>
  );
};

export default App;