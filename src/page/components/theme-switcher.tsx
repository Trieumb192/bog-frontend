import { useTheme } from '../contexts/theme-context';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const themes = ['light', 'dark', 'neon', 'pastel', 'retro', 'cyberpunk'];

const ThemeSwitcher = () => {
  const { theme, setTheme, toggleDarkMode } = useTheme();

  // Tạo menu dropdown
  const menu = (
    <Menu
      selectedKeys={[theme]} 
      onClick={({ key }) => setTheme(key)}
    >
      {themes.map((t) => (
        <Menu.Item key={t} className="capitalize">
          {t}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex gap-3 items-center">
      {/* Dropdown chọn theme */}
      <Dropdown overlay={menu} trigger={['click']}>
        <Button
          className="flex items-center justify-between"
          style={{
            backgroundColor: theme === 'dark' ? '#1f2937' : '#f3f4f6',
            color: theme === 'dark' ? '#fff' : '#1f2937',
          }}
        >
          Theme: <span className="capitalize ml-1">{theme}</span> <DownOutlined className="ml-2" />
        </Button>
      </Dropdown>

      {/* Nút toggle Auto Dark/Light */}
      <Button
        onClick={toggleDarkMode}
        className="bg-blue-400 text-white hover:bg-blue-600"
      >
        Auto Light/Dark
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
