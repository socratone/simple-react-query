import axios from 'axios';
import { User } from './types';

const BASE_URL = 'http://localhost:3001';

export const getUsers = () => {
  return axios.get<User[]>(BASE_URL + '/users').then((res) => {
    return res.data;
  });
};

export const getUser = (id: number) => {
  return axios.get<User>(BASE_URL + `/users/${id}`).then((res) => {
    return res.data;
  });
};
