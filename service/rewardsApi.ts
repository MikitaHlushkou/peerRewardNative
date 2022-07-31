import axios from 'axios';
import { IRewards } from '../mocks/types';
import { IRewardMessage } from '../components/RewardMessage';

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

const addNewReward = async (rewardMessage: IRewardMessage) => {
  const response = await apiClient.post<IRewards[]>('/rewards', rewardMessage);
  return response.data;
};

export { getAllRewards, addNewReward };
