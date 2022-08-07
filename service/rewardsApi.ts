import axios from 'axios';
import { IRewardMessage } from '../components/RewardMessage';
import { IUserProfile } from '../hooks/useAuth';
import { ILoginUserCredentials, IRewards, ISignUpCredentials } from './types';

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

const getUserRewards = async (name: string) => {
  const decodedName = encodeURI(name);
  const response = await apiClient.get<IRewards[]>(`/rewards/${decodedName}`);
  return response.data;
};

const addNewReward = async (rewardMessage: IRewardMessage) => {
  const response = await apiClient.post<IRewards[]>('/rewards', rewardMessage);
  return response.data;
};

const login = async (values: ILoginUserCredentials) => {
  const response = await apiClient.post<IUserProfile>('/user/login', values);
  return response.data;
};

const register = async (values: ISignUpCredentials) => {
  const response = await apiClient.post<IUserProfile>('/user/register', values);
  return response.data;
};

export { getAllRewards, getUserRewards, addNewReward, login, register };
