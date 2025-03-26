import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { AuthApi } from '../../service/LoginApi';
import { UserDto } from '../../types/User';

type AuthContextType = {
  user?: UserDto;
  token?: string;
  login: (request: UserDto) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
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
      axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
    }
  }, []);

  // Đăng nhập bằng email & password
  const login = async (request: UserDto) => {
    try {
      const response = await AuthApi.login({ email: request.email, password: request.password });
      const { user: newUser, token: newToken } = response.data;

      setUser(newUser);
      setToken(newToken);

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
    }
  };

  // Đăng nhập bằng Google OAuth2
  const loginWithGoogle = async () => {
    try {
      const response = await AuthApi.loginWithGoogle();
      const { user: newUser, token: newToken } = response.data;

      setUser(newUser);
      setToken(newToken);

      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(newUser));

      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
    } catch (error) {
      console.error('Đăng nhập bằng Google thất bại:', error);
    }
  };

  // Đăng xuất
  const logout = () => {
    setUser(undefined);
    setToken(undefined);

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    delete axios.defaults.headers.common['Authorization'];
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, token, login, loginWithGoogle, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth phải dùng trong AuthProvider');
  }
  return context;
};
