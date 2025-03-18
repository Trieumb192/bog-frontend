export interface UserDto {
    email: string;
    password: string;
    fullName?: string;
    role?: string;
}

export interface ResUserDto {
    user: UserDto;
    token: string;
}

