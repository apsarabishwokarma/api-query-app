export interface RegisterInputDTO {
  username: string;
  email: string;
  password: string;
  name: string;
}

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}
