import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { AuthApi } from '../../service/LoginApi';
import { UserDto, UserLoginRqDto } from '../../types/User';
import { message } from 'antd'; 

type AuthContextType = {
  user?: UserDto;
  token?: string;
  login: (request: UserLoginRqDto) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDto | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>(undefined);

  // Đọc token từ localStorage khi load trang
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Cập nhật axios khi token thay đổi
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // login
  const login = async (request: UserLoginRqDto) => {
    try {
      const response = await AuthApi.login(request);
      const { user: newUser, token: newToken } = response.data;

      setUser(newUser);
      setToken(newToken);

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      message.success('Đăng nhập thành công!');
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại!');
    }
  };

  // logout
  const logout = () => {
    setUser(undefined);
    setToken(undefined);

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    message.success('Bạn đã đăng xuất!');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải được dùng trong AuthProvider');
  }
  return context;
};
