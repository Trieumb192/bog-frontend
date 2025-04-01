import Header from '../components/header';
import Footer from '../components/footer';
import { BlogDto } from '@/types/Dto';
import { useCallback, useEffect, useState } from 'react';
import { BlogApi } from '@/service/BlogApi';
import { HTTP_OK } from '@/constants/common';

const VlogPlaylist = () => {
  const [blogs, setBlogs] = useState<Array<BlogDto>>([])

  const getBlogs = useCallback(async () => {
    const res = await BlogApi.getBlogs();
    if (res.statusCode === HTTP_OK) {
      setBlogs(res.data)
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <>
      <Header />
      <div style={{backgroundColor: "#fff", width: "80%"}} className="flex flex-col items-center justify-center">
        <div className="text-center" dangerouslySetInnerHTML={{ __html: blogs[0]?.content }} style={{ marginTop: "20px" }} />
      </div>
      <Footer />
    </>
  );
};

export default VlogPlaylist;
