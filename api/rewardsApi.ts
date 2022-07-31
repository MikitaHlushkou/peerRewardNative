import axios from 'axios';
import { IRewards } from '../mocks/types';

const apiClient = axios.create({
  baseURL: 'https://peer-reward.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAllRewards = async () => {
  const response = await apiClient.get<IRewards[]>('/rewards');
  return response.data;
};

export { getAllRewards };
