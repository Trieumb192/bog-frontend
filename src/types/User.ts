export interface UserDto {
  email: string;
  password: string;
  fullName?: string;
  role?: string;
}

export interface UserLoginRqDto {
  email?: string;
  password?: string;
  googleToken?: string;
  isGoogleLogin?: boolean;
}

export interface ResUserDto {
  user: UserDto;
  token: string;
}
