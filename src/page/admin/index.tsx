import { Card } from 'antd';
import React, { useCallback, useState } from 'react';
import { MenuIds, menuIdUrlKey } from './constant';
import { getUrlQuery, setUrlQuery } from '../../utils/common';
import LeftMenu from './components/left-menu';
import MainPage from './components/main-page';
import { useTheme } from '../contexts/theme-context';
import './style.css';
import Header from '../components/header';
import Footer from '../components/footer';

const ManagePage: React.FC = () => {
  const { theme } = useTheme();

  const [menuId, setMenuId] = useState<string>(() => {
    return (getUrlQuery(menuIdUrlKey, false) as string) || MenuIds.IMAGE;
  });

  const handleMenuChange = useCallback((newMenuKey: string) => {
    setMenuId(newMenuKey);
    setUrlQuery(menuIdUrlKey, newMenuKey);
  }, []);

  return (
    <>
      <Header />
      <div
        className={`
          ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}
          min-h-screen pt-[65px]
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card
            title={
              <h1 className="text-xl md:text-2xl font-bold text-green-600">
                MANAGER
              </h1>
            }
            headStyle={{
              backgroundColor: theme === 'dark' ? '#1f2937' : '#FCD3C2', // darker bg in dark theme
            }}
            bodyStyle={{
              padding: 0,
              backgroundColor: theme === 'dark' ? '#111827' : '#ffffff',
            }}
            className={`
              shadow-xl rounded-2xl overflow-hidden
              ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}
            `}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left Menu */}
              <aside
                className={`
                  md:w-1/4 w-full 
                  ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} 
                  border-b md:border-b-0 md:border-r
                  bg-white dark:bg-gray-800
                `}
              >
                <LeftMenu menuId={menuId} setMenuId={handleMenuChange} />
              </aside>

              {/* Main Page */}
              <main className="md:w-3/4 w-full p-4 bg-white dark:bg-gray-900">
                <MainPage menuId={menuId} />
              </main>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManagePage;
