import { useTheme } from '../contexts/theme-context';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FaSun, FaMoon, FaRocket, FaPalette, FaRobot, FaBolt } from 'react-icons/fa';

const themes = [
  { name: 'light', color: '#fefcbf', icon: <FaSun /> },
  { name: 'dark', color: '#1f2937', icon: <FaMoon /> },
  { name: 'neon', color: '#39ff14', icon: <FaBolt /> },
  { name: 'pastel', color: '#ffd1dc', icon: <FaPalette /> },
  { name: 'retro', color: '#ff8c00', icon: <FaRocket /> },
  { name: 'cyberpunk', color: '#ff00ff', icon: <FaRobot /> },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const menu = (
    <Menu
      selectedKeys={[theme]}
      onClick={({ key }) => setTheme(key)}
      className="rounded-lg overflow-hidden"
    >
      {themes.map((t) => (
        <Menu.Item key={t.name}>
          <div className="flex items-center gap-2">
            {t.icon}
            <span className="capitalize">{t.name}</span>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex items-center gap-3">
      <Dropdown overlay={menu} trigger={['click']}>
        <Button
          className={`flex items-center gap-2 px-4 py-1.5 rounded-lg shadow-sm transition duration-300
            ${theme === 'dark'
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
        >
          <span className="capitalize font-medium">{theme}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default ThemeSwitcher;
