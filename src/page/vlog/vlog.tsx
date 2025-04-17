import Header from '../components/header';
import Footer from '../components/footer';
import { BlogDto } from '@/types/Dto';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BlogApi } from '@/service/BlogApi';
import { HTTP_OK } from '@/constants/common';
import { useTheme } from '../contexts/theme-context';
import moment from 'moment';
import { FORMAT_DAY_MONTH_YEAR } from '@/constants/format';

const VlogPlaylist = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  const [blogs, setBlogs] = useState<Array<BlogDto>>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogDto | null>(null);
  const [searchText, setSearchText] = useState('');

  const getBlogs = useCallback(async () => {
    const res = await BlogApi.getBlogs();
    if (res.statusCode === HTTP_OK) {
      setBlogs(res.data);
      setSelectedBlog(res.data[0]);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => blog.title.toLowerCase().includes(searchText.toLowerCase()));
  }, [blogs, searchText]);

  return (
    <>
      <Header />
      <div
        className={`pt-[90px] pb-6 w-full flex flex-col items-center px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}
      >
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-6 min-h-[100vh]">
          {/* Sidebar */}
          <div
            className={`md:w-1/3 w-full p-4 rounded-xl shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
          >
            <h2 className="text-lg font-semibold mb-4">Danh sách bài viết</h2>

            {/* Search input */}
            <input
              type="text"
              placeholder="Tìm bài viết..."
              className={`w-full px-3 py-2 mb-4 rounded-md border outline-none transition ${
                darkMode
                  ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400'
                  : 'bg-white text-gray-900 border-gray-300 placeholder-gray-500'
              }`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            {/* List */}
            <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {filteredBlogs.map((blog) => (
                <li
                  key={blog.id}
                  onClick={() => setSelectedBlog(blog)}
                  className={`cursor-pointer p-3 rounded-lg border transition hover:bg-orange-100 dark:hover:bg-orange-300/20 ${
                    selectedBlog?.id === blog.id
                      ? 'bg-orange-200 dark:bg-orange-400/20 font-semibold'
                      : darkMode
                        ? 'border-gray-600'
                        : 'border-gray-300'
                  }`}
                >
                  {blog.title}
                </li>
              ))}
              {filteredBlogs.length === 0 && (
                <li className="italic opacity-70">Không tìm thấy bài viết nào.</li>
              )}
            </ul>
          </div>

          {/* Blog Content */}
          <div
            className={`md:w-2/3 w-full p-6 rounded-xl shadow-md blog-content [&_img]:mx-auto [&_img]:block [&_img]:max-w-full 
            ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
          >
            {selectedBlog && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500">
                  {selectedBlog.title}
                </h2>
                <div className="text-sm mb-4 italic text-gray-500 dark:text-gray-400">
                  Ngày đăng: {moment(selectedBlog.createdAt).format(FORMAT_DAY_MONTH_YEAR)} • Bởi{' '}
                  {selectedBlog.updatedBy}
                </div>
                <div
                  className="[&_img]:mx-auto [&_img]:block [&_img]:max-w-full prose prose-orange dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VlogPlaylist;
