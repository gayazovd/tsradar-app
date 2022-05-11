export interface IUser {
  username: string;
  password: string;
}

export interface IAuthToken {
  access_token: string;
}

export interface IUserProfile {
  _id: string;
  username: string;
  name: string;
  surname: string;
}

export interface IUserRegistration {
  _id: string;
  username: string;
  full_name: string;
  phone: number;
  isDeleted: boolean,
  deletedAt: null | string,
  __v: number;
}

/*
* _id: '62749cf77a3cb572757d935b',
  username: 'asasa@mail.ru',
  full_name: 'Akula',
  phone: '88888881212',
  isDeleted: false,
  deletedAt: null,
  __v: 0
*/

